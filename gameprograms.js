











function asteroids(){
let M=Math,L=Library();
let {random:rnd,sin,cos,atan2,min,PI,hypot}=M,{X,W,H}=L;
let SHAKE=L.Shake(X),SCORE=L.Score(X),SND=L.Sound(),PARTICLES=L.Particles(X,false),joy=L.Joystick();
let P, R, B, scene;

let baseSpeed = W * 0.15; 
let getSpeed = L.Difficulty({ start: baseSpeed, end: baseSpeed * 2, be: baseSpeed * 1.6, at: 1000 });

(init=()=>{
  let prev=0; P=Player(); R=Rocks(); B=Bullets();
  scene=[SHAKE,R,B,P,PARTICLES,SCORE]; scene.forEach(o=>o.reset?.());
  (loop=curr=>{
    if(P.hp<0)return init();
    let dt=min(.1,(curr-prev)/1000)||0;prev=curr;
    X.fillStyle="black";X.fillRect(0,0,W,H);X.save();scene.forEach(o=>o.update(dt));X.restore();
    requestAnimationFrame(loop);
  })(0)
})();

function Player(){
  let x=W/2, y=H/2, hp=3, r=W/40, a=0, t=0; 
  let maxShipSpeed = W * 0.5; 
  
  let path=L.shape([[0,-9],[1,-6,1,-4,2,-1],[2,0,3,0,3,1],[3,0,3,-1,3,-2],[4,-2,4,-2,5,-2],[5,-1,5,1,5,2],[5,2,6,2,6,2],[7,1,8,0,9,-1],[9,1,8,3,8,5],[6,6,5,8,3,9],[3,8,3,7,3,6],[3,6,2,5,2,5],[2,5,2,6,2,6],[1,6,1,6,0,6]]);
  return {get hp(){return hp}, get x(){return x}, get y(){return y}, get r(){return r}, hit:()=>(hp--,SHAKE.set(),PARTICLES.add(x,y)),
    update(dt){
      let d=hypot(joy.dx,joy.dy);
      if(d>10){
        a=atan2(joy.dy,joy.dx); let speed=min(d * 3, maxShipSpeed);
        x+=cos(a)*speed*dt; y+=sin(a)*speed*dt;
        if(x<-r)x=W+r; if(x>W+r)x=-r; if(y<-r)y=H+r; if(y>H+r)y=-r;
        t+=dt; if(t>.15){B.add(x,y,a,W*0.9);SND.rocket();t=0;} 
      }
      X.save();X.translate(x,y);X.rotate(a + PI/2);
      let scaleFactor = (r * 2) / 18;
      X.scale(scaleFactor, scaleFactor);
      X.strokeStyle=`hsl(${hp*40},100%,50%)`;X.lineWidth=1;
      X.stroke(path);X.restore();
    }
  }
}

function Rocks(){
  let A=[];
  let maxRockRadius = W / 20; 
  
  let spawn=(x,y,s,r=maxRockRadius)=>{
    let a=rnd()*PI*2, rot=rnd()*PI*2, rotSpeed=(rnd()-0.5)*(W*0.1/r);
    let path=new Path2D(), steps=8;
    for(let i=0;i<steps;i++){
      let ang=i*(PI*2/steps), dist=r*(0.7+rnd()*0.3);
      let px=cos(ang)*dist, py=sin(ang)*dist;
      if(i==0)path.moveTo(px,py); else path.lineTo(px,py);
    }
    path.closePath();
    A.push({x,y,v:cos(a)*s,w:sin(a)*s,r,hp:r>(maxRockRadius * 0.6)?2:1,path,rot,rotSpeed})
  };
  let fill=()=>{
    let currentScore = SCORE.score || 0;
    let speed = getSpeed(currentScore);
    for(let i=0;i<5;i++) spawn(rnd()*W,rnd()*(H*.3),speed);
  };
  return {A, reset:()=>{A.length=0;fill()}, update(dt){
    if(!A.length){fill()}
    for(let i=A.length-1;i>=0;i--){
      let k=A[i]; k.x+=k.v*dt; k.y+=k.w*dt; k.rot+=k.rotSpeed*dt;
      if(k.x<-k.r)k.x=W+k.r; if(k.x>W+k.r)k.x=-k.r; if(k.y<-k.r)k.y=H+k.r; if(k.y>H+k.r)k.y=-k.r;
      X.save();X.translate(k.x,k.y);X.rotate(k.rot);X.strokeStyle="white";X.lineWidth=2;X.stroke(k.path);X.restore();
      if(hypot(k.x-P.x,k.y-P.y)<k.r+P.r){P.hit();SND.explosion();PARTICLES.add(k.x,k.y);A.splice(i,1)}
    }
  }, split(i){
    let k=A[i]; SND.explosion();PARTICLES.add(k.x,k.y);SCORE.add(10); k.hp--;
    if(k.hp<=0){let {x,y,v,w,r}=k; A.splice(i,1); if(r>(maxRockRadius * 0.6)){spawn(x,y,hypot(v,w)*1.3,r/2);spawn(x,y,hypot(v,w)*1.3,r/2)}}
  }}
}

function Bullets(){
  let A=[];
  return {A, reset:()=>A.length=0, add:(x,y,a,s)=>A.push({x,y,v:cos(a)*s,w:sin(a)*s,lt:1.2}), update(dt){
    for(let i=A.length-1;i>=0;i--){
      let b=A[i]; b.x+=b.v*dt; b.y+=b.w*dt; b.lt-=dt;
      X.fillStyle="lime"; X.fillRect(b.x-2,b.y-2,4,4);
      if(b.lt<0){A.splice(i,1);continue}
      for(let j=R.A.length-1;j>=0;j--){
        let r=R.A[j]; if(hypot(b.x-r.x,b.y-r.y)<r.r){R.split(j);A.splice(i,1);break}
      }
    }
  }}
}
}













function Library(){
function element(tag){return document.body.appendChild(document.createElement(tag));}
let {random:rnd,sin,cos}=Math;
oncontextmenu=_=>false;
element("style").textContent="*{margin:0;padding:0;}canvas{touch-action:none} body{overflow:hidden}";
let X=element("canvas").getContext("2d",{alpha:false});
let W=innerWidth,H=innerHeight;
{let c=X.canvas,s=c.style,d=devicePixelRatio;c.width=W*d;c.height=H*d;s.width=W+"px";s.height=H+"px";X.setTransform(d,0,0,d,0,0);}
function shape(a){let p=new Path2D();for(let m of [1,-1]){p.moveTo(m*a[0][0],a[0][1]);for(let i=1;i<a.length;i++)p.bezierCurveTo(m*a[i][0],a[i][1],m*a[i][2],a[i][3],m*a[i][4],a[i][5]);}return p;}
function Score(X){let A=[],s=W/40;return{get score(){return A[0]},add:v=>A[0]+=v,reset(){A.unshift(0)},update(){X.fillStyle="white";X.font=`${s}px monospace`;["Score",...A].forEach((v,i)=>X.fillText(v,W*.05,i*s*1.2+H*.1))}}}
function Difficulty(p){let start=p.start,end=p.end,at=p.at,be=p.be;return function(x){return end-(end-start)*((end-be)/(end-start))**(x/at);}}
function Shake(X){let s=0;return{set:()=>s=40,update:(dt)=>s&&(s=.02**dt*s|0,X.translate((rnd()-.5)*s,(rnd()-.5)*s))}}
function Sound(){let b=new AudioContext(); [.2,1].forEach((v,i)=>(b[i+1]=b.createBuffer(1,b.sampleRate*v,b.sampleRate)).getChannelData(0).forEach((_,i,a)=>a[i]=rnd()*2-1))
return {
  rocket:()=>{let s=b.createBufferSource();s.buffer=b[1];s.connect(b.destination);s.start()},
  explosion:()=>{let s=b.createBufferSource(),g=b.createGain(),f=b.createBiquadFilter();s.buffer=b[2];g.gain.value=8;f.type="lowpass";f.frequency.value=300;g.gain.linearRampToValueAtTime(0,b.currentTime+1);s.connect(f).connect(g).connect(b.destination);s.start()}
}}
function Particles(X, gravity = true){let A=[];
return {add(x,y){for(let i=60;i--;){let a=rnd()*7,s=rnd()*4+1;A.push({x,y,v:cos(a)*s,w:sin(a)*s,l:1})}}, update(dt){
  A=A.filter(p=>(p.l-=.8*dt)>0); A.forEach(p=>{p.x+=p.v;p.y+=p.w+=(gravity?.1:0);X.fillStyle=`hsla(${p.l*60},100%,50%,${p.l})`;X.beginPath();X.arc(p.x,p.y,2,0,7);X.fill()})
}}}
function Joystick(){let o={dx:0,dy:0,sx:0,sy:0};addEventListener("pointerdown",e=>{o.sx=e.clientX;o.sy=e.clientY;o.dx=0;o.dy=0});addEventListener("pointermove",e=>{e.buttons>0&&(o.dx=e.clientX-o.sx,o.dy=e.clientY-o.sy)});addEventListener("pointerup",()=>(o.dx=0,o.dy=0));return o}
return {X,W,H,shape,Score,Difficulty,Shake,Sound,Particles,Joystick}
}











