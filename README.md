
1. Game Structure & Scope ⚙️
| Syntax | Purpose | Example |
|---|---|---|
| function gameName(){} | Defines the entire game and its local scope. | function bike(){...} |
| let W=innerWidth; | Defines the global canvas width (and height). | (Defined outside the game function) |
| (function loop(){...})(); | Starts the main game loop using an IIFE. | (function loop(){... requestAnimationFrame(loop); })(); |
| requestAnimationFrame(loop); | Schedules the next frame for smooth animation. |  |
| return function(){...} | The common pattern for defining a layer/object's update/draw step. | function Sky(){ return function(){ c.fillRect(0,0,W,W); }; } |
2. Variables & Logic Flow 🔄
| Syntax | Purpose | Example |
|---|---|---|
| let x=0, y=0; | Declares multiple local variables concisely. | let hit,speed=W/FPS/5,size=W/30; |
| let obj={x:0, y:0}; | Object declaration. | trees[i]={x:L.rnd(W*2,W)}; |
| arr.forEach(item => {}) | Iterating over array elements. | os.forEach(o=>o()); |
| arr.filter(p => p.life-->0) | Creates a new array with elements that pass the test (used for removing dead particles). | list=list.filter(p=>p.life-->0); |
| if(condition){...}else{...} | Conditional execution. | if(o.x<-W)m.x=W-ms.speed; |
| a ? b : c | Ternary Operator (short-hand if/else). | ship=(bad?hot:cold); |
| a &&= b | Logical AND Assignment (assign if a is truthy). | played&&=((fuel=...); false); |
3. Canvas & Drawing (Context c) 🎨
The context is usually obtained via let c = L.canvas();.
| Syntax | Purpose | Example |
|---|---|---|
| c.fillStyle="color"; | Sets the fill color. | c.fillStyle="tan"; |
| c.fillRect(x,y,w,h); | Draws a solid rectangle. | c.fillRect(0,0,W,W); |
| c.icon(code,x,y); | Draws an emoji icon (using Unicode codes). | c.icon(128692, 0, 0); |
| c.fillText(text,x,y); | Draws text (for score/debug). | c.fillText(score,W/2,20); |
| c.save()/c.restore() | Saves/restores the drawing state (transformations). | c.save(); c.translate(x,y); c.restore(); |
| L.gradient(c, b, h, a) | Creates a linear gradient. | L.gradient(c,W,-W,[[0,"skyblue"],...]) |
| L.shape(a, s) | Creates a reusable Path2D object for complex paths. | let ship=L.shape([[0,0,-1,0,...]], p/4); |
4. Math and Library Helpers ➗
Standard Math functions are aliased globally (floor, sin, cos, PI, hypot, atan2, etc.).
| Function | Purpose (Game Context) | Example |
|---|---|---|
| L.rnd(max, min) | Custom function to get a random integer. | let x = L.rnd(W); |
| hypot(dx, dy) | Calculates the distance between two points (for collision). | if(hypot(x1-x2, y1-y2) < radius){...} |
| atan2(dy, dx) | Calculates the angle of a vector (for aiming/rotation). | o.angle = atan2(y-W, x-W/2); |
| L.Sound() | Provides basic sound effects (.rocket(), .explosion()). | snd.explosion(); |
| L.Particles(c) | Creates a particle system for visual effects. | particles.create(o.x, o.y); |
| L.Difficulty(p) | Helper for defining a nonlinear difficulty curve based on level. | speed = difficulty(level.value); |
5. Input Handling 👆
Input is handled globally by adding listeners to the window/document.
| Syntax | Purpose | Example |
|---|---|---|
| addEventListener("click", func) | Attaches a listener for mouse/touch down events. | addEventListener("click",move,false); |
| ({pageX:x, pageY:y}) | Destructuring the event object to quickly get mouse/touch coordinates. | addEventListener("click",({pageX:x,pageY:y})=>{...}); |
| addEventListener("pointerdown", func) | Used for touch-friendly press/release events. | addEventListener("pointerdown",()=>{...}); |

