








function bike(){let z="xxxx";
let {random:rnd,sin,cos,atan,atan2,min,PI,abs,ceil}=Math,L=Library(),{X,W,H}=L;
let SHAKE=L.Shake(X),HISTORY=L.History(X),BIKE=Bike(),TREES=Trees(),scene=[SHAKE,Sky(),Mountains(),Ground(),TREES,BIKE,HISTORY];
let SPEED=W/300,OFFSET=0,height,angle; {let freq=1/100,amp=40,tilt=.5; height=x=>sin((x+OFFSET)*freq)*amp+(H*.7)+x*tilt,angle=x=>atan(amp*freq*cos((x+OFFSET)*freq)+tilt);}

(init=()=>{let prev=0;OFFSET=0;scene.forEach(o=>o.reset?.());(loop=curr=>{let dt=min(.1,(curr-prev)/1000)||0;prev=curr;X.save();scene.forEach(o=>o.update(dt));X.restore();requestAnimationFrame(loop)})(0)})();

function Bike(){let s=W/20,o={x:80,y:0,a:0},vy=0,st=1;onpointerdown=()=>st==1&&(st=2,vy=-450,o.a-=PI/8);onpointerup=()=>st==2&&(st=3);
return {o,s,get j(){return st!=1},reset:()=>(st=1,vy=0),update(dt){let gy=height(o.x)-(s/2),d=o.a-angle(o.x);
  st==1?(o.y=gy,o.a=angle(o.x)):(vy+=600*dt,o.y+=vy*dt,st==2&&(o.a-=5*dt),o.y>=gy&&(abs(atan2(sin(d),cos(d)))>=PI/4&&(HISTORY.add(-1),SHAKE.set()),st=1,vy=0,o.y=gy));
  X.save();X.translate(o.x,o.y);X.rotate(o.a);X.scale(-1,1);X.font=`${s}px serif`;X.textAlign="center";X.textBaseline="middle";X.fillText("🚴",0,0);X.restore()
}}}

function Trees(){let A=[],s=W/10;
return {reset:()=>A=Array.from({length:3},(_,i)=>({x:W+i*(W/2),u:0})),update(dt){X.save();X.font=`${s}px serif`;X.textAlign="center";X.textBaseline="bottom";
  A.forEach(t=>{
    t.x-=SPEED*100*dt;t.x<-s&&(t.x=W+rnd()*200,t.u=0);X.fillText("🌲",t.x,height(t.x));let hitRadius=(s+BIKE.s)*.4;
    !t.u&&abs(t.x-BIKE.o.x)<hitRadius&&(t.u=1,BIKE.j?HISTORY.add(1):(HISTORY.add(-1),SHAKE.set()))
  });X.restore()
}}}

function Mountains(){let w=W*.8,m=L.shape2([[0,0,1,-2,2,-1,3,-4,4,-2,5,-3,6,-1,8,-7,10,0,0,0,0,10,10,10,10,0]]),ms=Array.from({length:ceil(W/w)+1},(_,i)=>({x:i*w}));
return {update(dt){X.fillStyle="white";ms.forEach(p=>{p.x-=SPEED*20*dt;p.x<-w&&(p.x+=w*ms.length);X.save(); X.translate(p.x, H*.7); X.scale(w/10,w/10); X.fill(m); X.restore();})
}}}

function Ground(){return{update(dt){OFFSET+=SPEED*100*dt;X.fillStyle="tan";X.beginPath();X.moveTo(0,H);for(let x=0;x<=W;x+=30)X.lineTo(x,height(x));X.lineTo(W,H);X.fill()}}}
function Sky(){return{update:()=>(X.fillStyle="skyblue",X.fillRect(0,0,W,H))}}

}









function defense(){
let {random:rnd,sin,cos,atan2,min,PI,hypot}=Math,L=Library(),{X,W,H}=L;
let SHAKE=L.Shake(X),HISTORY=L.History(X),SND=L.Sound(),PARTICLES=L.Particles(X),ASTEROIDS=Asteroids(),EARTH=Earth(),scene=[SHAKE,Ground(),ASTEROIDS,EARTH,PARTICLES,HISTORY];

(init=()=>{let prev=0,dt;scene.forEach(o=>o.reset?.());(loop=curr=>{if(EARTH.hp<0)return init();
  dt=min(.1,(curr-prev)/1000)||0;prev=curr; X.fillStyle="black";X.fillRect(0,0,W,H);X.save();scene.forEach(o=>o.update(dt));X.restore(); requestAnimationFrame(loop)
})(0)})();

function Earth(){
let B=[],hp=10;addEventListener("click",({clientX:x,clientY:y})=>{hp>0&&(B.push({x:W/2,y:H-40,tx:x,ty:y,a:atan2(y-(H-40),x-W/2)}),SND.rocket())});
return {B,get hp(){return hp},damage:()=>(hp--,SHAKE.set()),reset:()=>hp=10,update(dt){
  X.fillStyle="lime";B.forEach((b,i)=>{ b.x+=cos(b.a)*700*dt;b.y+=sin(b.a)*700*dt; X.fillRect(b.x-2,b.y-2,4,4); if(hypot(b.x-b.tx,b.y-b.ty)<15){ASTEROIDS.hit(b.x,b.y);B.splice(i,1)} })
}}}

function Asteroids(){
let R=[],level=L.Difficulty({start:0.8,end:15,at:250,be:3}),spawn=(s=2)=>({x:rnd()*W,y:-20,s,a:rnd()*.4-.2,c:`hsl(${rnd()*360},70%,50%)`,r:15+rnd()*10,ir:7+rnd()*5,rot:0});
return {hit(x,y){for(let i=R.length-1;i>=0;i--){let r=R[i];if(hypot(x-r.x,y-r.y)<45){SND.explosion();PARTICLES.add(r.x,r.y);HISTORY.add(1);R.splice(i,1)}}},reset:()=>R=[],update(dt){
  (rnd()<.02*level(HISTORY.score))&&R.push(spawn(1+level(HISTORY.score)/5));
  R.forEach((r,i)=>{
    r.y+=r.s*70*dt;r.x+=sin(r.a)*r.s*30*dt;r.rot+=r.s*dt;
    X.save();X.translate(r.x,r.y);X.rotate(r.rot);X.strokeStyle=r.c;X.lineWidth=2;asteroid(r.r,r.ir);X.stroke();X.restore();
    if(r.y>H-40){EARTH.damage();PARTICLES.add(r.x,r.y);R.splice(i,1)}
  })
}}}

function Ground(){return {update:()=>(X.fillStyle=`hsl(${EARTH.hp*12},70%,40%)`,X.fillRect(0,H-40,W,40))}}
function asteroid(r1,r2,p=5){let a=PI/p;X.beginPath();X.moveTo(0,-r1);for(let i=1;i<p*2;i++){let r=i%2?r2:r1;X.lineTo(cos(i*a-PI/2)*r,sin(i*a-PI/2)*r)}X.closePath()}

}










function Library(){
function element(tag){return document.body.appendChild(document.createElement(tag));}
let {random:rnd,sin,cos}=Math;
oncontextmenu=_=>false;
element("style").textContent="*{margin:0;padding:0;}canvas{touch-action:none} body{overflow:hidden}";
let X=element("canvas").getContext("2d",{alpha:false});
let W=innerWidth,H=innerHeight;
{let c=X.canvas,s=c.style,d=devicePixelRatio;c.width=W*d;c.height=H*d;s.width=W+"px";s.height=H+"px";X.setTransform(d,0,0,d,0,0);}
function scroll(A,dt,spawn){for(let o of A)o.y+=H/3*dt,o.y>H&&spawn?.(o)}
function shape(a){let p=new Path2D();for(let m of [1,-1]){p.moveTo(m*a[0][0],a[0][1]);for(let i=1;i<a.length;i++)p.bezierCurveTo(m*a[i][0],a[i][1],m*a[i][2],a[i][3],m*a[i][4],a[i][5]);}return p;}
function shape2(a){return a.reduce((p,i)=>(i.length&&(p.moveTo(i[0],i[1]),i.slice(2).forEach((x,j)=>j%2||p.lineTo(x,i[j+3]))),p),new Path2D)}
function History(X){let A=[],s=W/40;return{get score(){return A[0]},add:v=>A[0]+=v,reset(){A.unshift(0)},update(){X.fillStyle="white";X.font=`${s}px monospace`;["Score",...A].forEach((v,i)=>X.fillText(v,W*.05,i*s*1.2+H*.1))}}}
function Difficulty(p){let start=p.start,end=p.end,at=p.at,be=p.be;return function(x){return end-(end-start)*((end-be)/(end-start))**(x/at);}}
function Shake(X){let s=0;return{set:()=>s=40,update:(dt)=>s&&(s=.02**dt*s|0,X.translate((rnd()-.5)*s,(rnd()-.5)*s))}}
function Sound(){let b=new AudioContext(); [.2,1].forEach((v,i)=>(b[i+1]=b.createBuffer(1,b.sampleRate*v,b.sampleRate)).getChannelData(0).forEach((_,i,a)=>a[i]=rnd()*2-1))
return {
  rocket:()=>{let s=b.createBufferSource();s.buffer=b[1];s.connect(b.destination);s.start()},
  explosion:()=>{let s=b.createBufferSource(),g=b.createGain(),f=b.createBiquadFilter();s.buffer=b[2];g.gain.value=8;f.type="lowpass";f.frequency.value=300;g.gain.linearRampToValueAtTime(0,b.currentTime+1);s.connect(f).connect(g).connect(b.destination);s.start()}
}}
function Particles(X){let A=[];
return {add(x,y){for(let i=60;i--;){let a=rnd()*7,s=rnd()*4+1;A.push({x,y,v:cos(a)*s,w:sin(a)*s,l:1})}}, update(dt){
  A=A.filter(p=>(p.l-=.8*dt)>0); A.forEach(p=>{p.x+=p.v;p.y+=p.w+=.1;X.fillStyle=`hsla(${p.l*60},100%,50%,${p.l})`;X.beginPath();X.arc(p.x,p.y,2,0,7);X.fill()})
}}}
return {X,W,H,scroll,shape,shape2,History,Difficulty,Shake,Sound,Particles}
}










