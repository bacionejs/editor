function asteroids(){
let L=Library(),{random:rnd,sin,cos,atan2,min,PI,hypot}=Math,{X,W,H}=L,SHAKE=L.Shake(X),SCORE=L.Score(X);
let bonus,P,R,B,U,scene,SND=L.Sound(),PARTICLES=L.Particles(X,false),joy=L.Joystick();
let getSpeed=L.Difficulty({start:W*.1,end:W*.2,be:W*.16,at:2000});
let addScore=v=>{SCORE.add(v);if(SCORE.score>=bonus){if(P&&P.hp<3){P.hp++;SND.bonus()}bonus+=500}};
let collides=(a,b)=>hypot(a.x-b.x,a.y-b.y)<(a.r||0)+(b.r||0);
let wrap=o=>{if(o.x<0)o.x=W;if(o.x>W)o.x=0;if(o.y<0)o.y=H;if(o.y>H)o.y=0};
let move=(o,dt)=>{o.x+=o.v*dt;o.y+=o.w*dt};

(init=()=>{
  let prev=0;P=Player();R=Rocks();B=Bullets();U=Ufo();scene=[SCORE,SHAKE,R,B,U,P,PARTICLES];
  bonus=500;
  scene.forEach(o=>o.reset?.());
  (loop=curr=>{
    if(P.hp<0)return init();
    let dt=min(.1,(curr-prev)/1000)||0;prev=curr;X.fillStyle="black";X.fillRect(0,0,W,H);
    X.save();scene.forEach(o=>o.update(dt));X.restore();requestAnimationFrame(loop);
  })(0)
})();

function Player(){
let p=[[0,-9],[1,-6,1,-4,2,-1],[2,0,3,0,3,1],[3,0,3,-1,3,-2],[4,-2,4,-2,5,-2],[5,-1,5,1,5,2],[5,2,6,2,6,2],[7,1,8,0,9,-1],[9,1,8,3,8,5],[6,6,5,8,3,9],[3,8,3,7,3,6],[3,6,2,5,2,5],[2,5,2,6,2,6],[1,6,1,6,0,6]];
let x=W/2,y=H/2,hp=3,r=W/40,a=0,t=0,max=W*.5,path=L.shape(p);
return {get hp(){return hp},set hp(v){hp=v},get x(){return x},set x(v){x=v},get y(){return y},set y(v){y=v},get r(){return r},hit:()=>(hp--,SHAKE.set(),PARTICLES.add(x,y)),update(dt){
  let d=hypot(joy.dx,joy.dy);
  if(d>10){
    a=atan2(joy.dy,joy.dx);let speed=min(d*3,max);x+=cos(a)*speed*dt;y+=sin(a)*speed*dt;
    wrap(this);
    t+=dt;if(t>.15){B.add(x,y,a,W*.9,!0);t=0}
  }
  X.save();X.translate(x,y);X.rotate(a+PI/2);let sf=(r*2)/20;X.scale(sf,sf);
  X.strokeStyle=`hsl(${hp*40},100%,50%)`;X.lineWidth=1/sf;X.stroke(path);X.restore();
}}}

function Ufo(){
let active=!1,x=0,y=0,vx=0,r=W/50,st=5,sht=0,at=0,snd=0,path=L.shape([[0,-3],[7,-2,10,0,0,-5],[10,0,0,-5,10,0],[0,3,10,0,0,3]]);
let spawn=()=>{active=!0;x=rnd()>.5?-r:W+r;y=rnd()*(H*.6)+(H*.2);vx=(x<0?1:-1)*(W*.2);sht=1;at=0;snd=0};
return {get active(){return active},get x(){return x},get y(){return y},get r(){return r},reset(){active=!1;st=5},destroy(){active=!1;st=7+rnd()*5;SND.explosion();PARTICLES.add(x,y)},update(dt){
  if(!active){st-=dt;if(st<=0)spawn();return}
  x+=vx*dt;at+=dt*4;y+=sin(at)*(W*.1)*dt;snd-=dt;if(snd<=0){SND.ufo();snd=.12}
  if((vx>0&&x>W+r)||(vx<0&&x<-r)){active=!1;st=5+rnd()*5}
  sht-=dt;
  if(sht<=0){let aim=atan2(P.y-y,P.x-x);B.add(x,y,aim,W*.45,!1);sht=1.5+rnd()}
  X.save();X.translate(x,y);let sf=(r*2)/20;X.scale(sf,sf);X.lineWidth=1/sf;X.strokeStyle="#0ff";X.stroke(path);X.restore();
  if(collides(this,P)){P.hit();this.destroy()}
}}}

function Rocks(){
let A=[],max=W/20;
let spawn=(x,y,s,r=max)=>{
  let a=rnd()*PI*2,rot=rnd()*PI*2,rotSpeed=(rnd()-.5)*(W*.1/r),path=new Path2D(),steps=8;
  for(let i=0;i<steps;i++){
    let ang=i*(PI*2/steps),dist=r*(.7+rnd()*.3),px=cos(ang)*dist,py=sin(ang)*dist;
    if(i==0)path.moveTo(px,py);else path.lineTo(px,py);
  }
  path.closePath();A.push({x,y,v:cos(a)*s,w:sin(a)*s,r,hp:r>(max*.6)?2:1,path,rot,rotSpeed});
};
let fill=()=>{let speed=getSpeed(SCORE.score||0);for(let i=0;i<5;i++)spawn(rnd()*W,rnd()*H,speed)};
return {A,reset:()=>{A.length=0;fill()},split(i){let k=A[i];SND.explosion();PARTICLES.add(k.x,k.y);addScore(10);k.hp--;if(k.hp<=0){let {x,y,v,w,r}=k;A.splice(i,1);if(r>(max*.6)){spawn(x,y,hypot(v,w)*1.3,r/2);spawn(x,y,hypot(v,w)*1.3,r/2)}}},update(dt){
  if(!A.length)fill();
  for(let i=A.length-1;i>=0;i--){
    let k=A[i];move(k,dt);k.rot+=k.rotSpeed*dt;wrap(k);
    X.save();X.translate(k.x,k.y);X.rotate(k.rot);X.strokeStyle="white";X.stroke(k.path);X.restore();
    if(collides(k,P)){P.hit();SND.explosion();PARTICLES.add(k.x,k.y);A.splice(i,1);continue}
    if(U.active&&collides(k,U))this.split(i);
  }
}}}

function Bullets(){
let A=[];
return {A,reset:()=>A.length=0,add:(x,y,a,s,fP)=>A.push({x,y,v:cos(a)*s,w:sin(a)*s,lt:1.2,fP}),update(dt){
  for(let i=A.length-1;i>=0;i--){
    let b=A[i];move(b,dt);b.lt-=dt;X.fillStyle=b.fP?"lime":"fuchsia";X.fillRect(b.x-2,b.y-2,4,4);
    if(b.lt<0){A.splice(i,1);continue}
    if(b.fP){
      if(U.active&&collides(b,U)){addScore(200);U.destroy();A.splice(i,1);continue}
      let hit=!1;
      for(let j=R.A.length-1;j>=0;j--){
        if(collides(b,R.A[j])){R.split(j);hit=!0;break}
      }
      if(hit){A.splice(i,1);continue}
    }else{
      if(collides(b,P)){P.hit();SND.explosion();A.splice(i,1);continue}
    }
  }
}}}

}

function Library(){
function element(tag){return document.body.appendChild(document.createElement(tag))}
element("style").textContent="*{margin:0;padding:0}canvas{touch-action:none}body{overflow:hidden}";oncontextmenu=_=>false;
let {random:rnd,sin,cos}=Math,X=element("canvas").getContext("2d",{alpha:!1}),W=innerWidth,H=innerHeight;
{let c=X.canvas,s=c.style,d=devicePixelRatio;c.width=W*d;c.height=H*d;s.width=W+"px";s.height=H+"px";X.setTransform(d,0,0,d,0,0)}
function shape(a){let p=new Path2D();for(let m of [1,-1]){p.moveTo(m*a[0][0],a[0][1]);for(let i=1;i<a.length;i++)p.bezierCurveTo(m*a[i][0],a[i][1],m*a[i][2],a[i][3],m*a[i][4],a[i][5])}return p}
function Score(X){let A=[],s=W/40;return{get score(){return A[0]},add(v){A[0]+=v},reset(){A.unshift(0)},update(){X.fillStyle="white";X.font=`${s}px monospace`;["Score",...A].forEach((v,i)=>X.fillText(v,W*.05,i*s*1.2+H*.1))}}}
function Difficulty(p){let s=p.start,e=p.end,a=p.at,b=p.be;return function(x){return e-(e-s)*((e-b)/(e-s))**(x/a)}}
function Shake(X){let s=0;return{set:()=>s=40,update:(dt)=>s&&(s=.02**dt*s|0,X.translate((rnd()-.5)*s,(rnd()-.5)*s))}}

function Sound(){
let b=new AudioContext();
[.2,1].forEach((v,i)=>(b[i+1]=b.createBuffer(1,b.sampleRate*v,b.sampleRate)).getChannelData(0).forEach((_,i,a)=>a[i]=rnd()*2-1));
let get=t=>b[`create${t}`]();
let at=(p,v,t)=>p.setValueAtTime(v,b.currentTime+t);
let ramp=(p,v,t,e)=>p[`${e?'exponential':'linear'}RampToValueAtTime`](v,b.currentTime+t);
let play=(s,...nodes)=>{nodes.reduce((acc,n)=>(acc.connect(n),n),s).connect(b.destination);s.start();return s;};
return{
rocket:()=>{let s=get("BufferSource");s.buffer=b[1];play(s);},
explosion:()=>{
  let s=get("BufferSource"),g=get("Gain"),f=get("BiquadFilter");
  s.buffer=b[2];
  g.gain.value=1;
  f.type="lowpass";
  f.frequency.value=300;
  ramp(g.gain,0,1);
  play(s,f,g);
},
ufo:()=>{
  let o=get("Oscillator"),g=get("Gain");
  o.type="sawtooth";
  at(o.frequency,600,0);
  ramp(o.frequency,150,.12,1);
  at(g.gain,0.5,0);
  ramp(g.gain,0,.12);
  play(o,g).stop(b.currentTime+.12);
},
bonus:()=>{
  let o=get("Oscillator"),g=get("Gain");
  o.type="square";
  [523.25,659.25,783.99,1046.5].forEach((f,i)=>at(o.frequency,f,i*.15));
  at(g.gain,2,0);
  ramp(g.gain,.01,1.2,1);
  play(o,g).stop(b.currentTime+1.2);
}}}

function Particles(X,g=true){let A=[]; return {
  add(x,y){for(let i=60;i--;){let a=rnd()*7,s=rnd()*4+1;A.push({x,y,v:cos(a)*s,w:sin(a)*s,l:1})}},
  update(dt){A=A.filter(p=>(p.l-=.8*dt)>0);A.forEach(p=>{p.x+=p.v;p.y+=p.w+=(g?.1:0);X.fillStyle=`hsla(${p.l*60},100%,50%,${p.l})`;X.beginPath();X.arc(p.x,p.y,2,0,7);X.fill()})}
}}

function Joystick(){let o={dx:0,dy:0,sx:0,sy:0};
  addEventListener("pointerdown",e=>{o.sx=e.clientX;o.sy=e.clientY;o.dx=0;o.dy=0});
  addEventListener("pointermove",e=>{e.buttons>0&&(o.dx=e.clientX-o.sx,o.dy=e.clientY-o.sy)});
  addEventListener("pointerup",()=>(o.dx=0,o.dy=0));return o
}

return {X,W,H,shape,Score,Difficulty,Shake,Sound,Particles,Joystick}
}
