
---

To open the editor, click ↴  
<a href="//bacionejs.github.io/editor/bacionejs.html" target="_blank"> <img src="https://repository-images.githubusercontent.com/788276995/040a885f-c9e7-431b-bd4f-27a9069971b6" width="100%"> </a>

Or download and open from your file manager 

---

**Features**
- **Run**: instant code execution
- **Debugging**: displays message and positions the cursor at the error
- **Editing**: save, cut, copy, paste, undo, redo
- **Search**: replace, incremental find, highlight all
- **Code Assistance**: auto-complete, auto-indent, auto-comment
- **Themes**: light and dark mode syntax highlighting
- **Diff**: changes since open/save  
- **Zoom**: adjust text size  
- **Fullscreen**: expand your workspace  
- **Gestures**: swipe and long-press-repeat support  
- **Pickers**: icon and color selectors  
- **Configurable**: modify the editor source within itself ⚙️
- **Examples**: games included 🎮
- **Help**: built-in guide 📚
   
---

For complex stuff, try [Termux/Neovim](https://github.com/bacionejs/termux)

---




<details>
<summary>📝 Press Kit Examples</summary>

> BacioneJS is an innovative, standalone JavaScript editor and IDE designed specifically for mobile use. It stands out by featuring a fully custom, thumb-friendly keyboard and running completely offline from a single HTML file, making coding accessible to anyone with an Android phone, regardless of computer access.

> Developed with the mission to democratize coding, BacioneJS transforms any Android phone into a powerful, pocket-sized Integrated Development Environment (IDE). Unlike traditional mobile editors, BacioneJS requires no installation and operates entirely offline from a single bacionejs.html file. Its major innovation is the custom keyboard and logic, which simplifies the entry of code symbols and commands, eliminating the typical frustrations of mobile programming and making it the most thumb-friendly solution for developing small JavaScript games.

> Bacione JavaScript Editor Integrated Development Environment (BacioneJS) is a unique open-source project (GPL licensed) built entirely in vanilla JavaScript with zero dependencies. This design choice ensures maximum accessibility and portability, allowing the entire IDE to run offline from a simple HTML file. BacioneJS is targeted at aspiring programmers who lack consistent access to a traditional computer, offering a full suite of features—including instant code execution, debugging, and code assistance—all optimized for a mobile touchscreen via its custom keyboard interface.

> Developed with the mission to democratize coding, BacioneJS transforms any Android phone into a powerful, pocket-sized Integrated Development Environment (IDE). The name "Bacione" means "big kiss" in Italian, reflecting the core philosophy of Keep It Satisfyingly Simple (KISS). This simplicity drives its design: it runs entirely offline from a single HTML file, requires zero setup, and features a revolutionary custom keyboard optimized for thumbs. At just 7 kilobytes zipped, the project delivers a full-featured IDE—proving that you get a lot for little code. By simplifying the entry of complex code symbols and commands, BacioneJS eliminates the typical frustrations of mobile programming, making coding accessible and genuinely enjoyable for beginners.

> BacioneJS is not just an editor; it's a portable coding laboratory for mobile users. To ensure beginners can start immediately, the single-file IDE is pre-loaded with numerous small, runnable JavaScript games that are perfect for tinkering and learning. These basic examples include classic logic puzzles and physics simulations, such as: Chess, Snake, Pairs, Missile Defense, Monkey Maze, Mars Lander, Bike, and Ski. This integrated, hands-on environment lets developers bypass complicated setup, allowing them to instantly see how simple game mechanics work and modify the code right on their phone, completely offline.

</details>



<details>
<summary>📝 Article Example</summary>

*In a world dominated by powerful desktop IDEs and complex build pipelines, could the future of accessible coding lie in a single, self-contained HTML file? Meet BacioneJS, a remarkable offline JavaScript IDE for your phone that's rewriting the rules of mobile development.*

![BacioneJS Editor Screenshot](https://repository-images.githubusercontent.com/788276995/040a885f-c9e7-431b-bd4f-27a9069971b6)

For most of us, writing code is synonymous with a comfortable chair, a large screen (or two), and a mechanical keyboard. The thought of seriously programming on a mobile phone often elicits a cringe—fiddling with clunky on-screen keyboards, hunting for special characters, and wrestling with subpar tools. But what if the problem isn't the form factor, but the tools themselves?

BacioneJS is an open-source project that doesn't just ask this question; it answers it with a resounding, elegant solution. It's a full-featured Integrated Development Environment (IDE) that runs entirely offline from a single HTML file, with zero dependencies. Its mission is ambitious and deeply inspiring: to democratize coding by turning any Android phone into a capable, pocket-sized development machine.

## The "Bacione" Philosophy: Keep It Satisfyingly Simple

The name "Bacione" (pronounced *ba-CHO-neh*) is Italian for "big kiss," a playful nod to the core design principle: **Keep It Satisfyingly Simple (KISS)**. This isn't just a catchy acronym; it's the philosophical bedrock of the entire project.

> "Developed with the mission to democratize coding, BacioneJS transforms any Android phone into a powerful, pocket-sized Integrated Development Environment (IDE)... By simplifying the entry of complex code symbols and commands, BacioneJS eliminates the typical frustrations of mobile programming, making coding accessible and genuinely enjoyable for beginners." - *From the BacioneJS Press Kit*

This philosophy manifests in several key architectural decisions:

1.  **A Single HTML File:** The entire IDE—editor, syntax highlighter, execution engine, and a suite of tools—is encapsulated in one `bacionejs.html` file. There's no installation, no server, and no need for an internet connection. You simply download the file and open it in your mobile Chrome browser. This makes it supremely portable and accessible.
2.  **Zero Dependencies, Pure Vanilla JS:** In an ecosystem saturated with frameworks and libraries, BacioneJS is a testament to the power of vanilla JavaScript. This choice eliminates build steps and external dependencies, ensuring the project remains lightweight (just 7kb zipped!) and transparent. Anyone with a basic understanding of JS, HTML, and CSS can read the source and understand how it works.
3.  **Offline First:** BacioneJS is designed for a world where internet access isn't a given. It empowers aspiring developers who may not have consistent access to a traditional computer or reliable Wi-Fi to learn and create wherever they are.

## The Killer Feature: A Keyboard Built for Coding

The most immediate and revolutionary feature of BacioneJS is its custom, thumb-friendly keyboard. Standard mobile keyboards are optimized for prose, not programming. They hide essential symbols like `{}`, `[]`, `;`, and `()` behind multiple taps, turning a simple `for` loop into an exercise in frustration.

The BacioneJS keyboard solves this by providing a purpose-built interface for code.

![A conceptual view of the thumb-friendly keyboard layout]

-   **Logical Layout:** All common programming symbols are available on the main layout, logically grouped for quick access.
-   **Dedicated Function Keys:** Essential IDE actions like **Run**, **Save**, **Undo/Redo**, **Copy**, and **Paste** are single-tap buttons, not hidden menu items.
-   **Powerful Gestures:** The keyboard is surprisingly deep. A **swipe-up** gesture on a key often reveals its shifted alternative (e.g., swipe up on `q` for `Q`) or a secondary function (e.g., swipe up on the **Save** icon to run a `diff`). A **long-press** activates a key-repeat, perfect for navigation or deleting characters.

This thoughtful design transforms the act of mobile coding from a chore into a fluid, efficient experience.

## Under the Hood: A Technical Tour

For a project with no dependencies, BacioneJS packs a surprising amount of clever engineering. Let's peel back the layers.

### The Editor Core

At its heart, the editor uses a classic and effective technique. A standard `<textarea>` element, made completely transparent, sits on top of a `<div>` element.

```javascript
// A simplified look at the setup from bacionejs.html
let T = element("textarea");
let PRETTY = element("div");

// ... styles make T transparent and position it over PRETTY

function syncpretty(){
  PRETTY.innerHTML = pretty(T.V) + "\n";
}

T.addEventListener('input', syncpretty);
```

As you type into the invisible `textarea`, its value is passed to a custom syntax highlighting function, `pretty()`. This function uses a series of regular expressions to wrap keywords, symbols, and strings in `<span>` tags with appropriate colors. The resulting HTML is then rendered in the `PRETTY` div underneath. This gives you the performance of a native text input element with the aesthetics of a rich code editor.

### It Edits Itself!

One of the most mind-bending features is the ability to edit the editor's own source code. A toggle in the "Misc" panel switches the editor's content from the user's game code to the IDE's own JavaScript logic. This allows for ultimate customization. Want a new theme? You can code it. Want to add a new button to the keyboard? You can modify the `createkeys()` function, save a new version of `bacionejs.html`, and immediately use your creation. It's a powerful, self-hosting environment that embodies the spirit of open-source tinkering.

### The Built-in Game Library (`L`)

BacioneJS is more than just an editor; it's a creative environment. It includes a small, built-in helper library, aliased as `L`, designed to simplify common tasks for creating 2D games.

```javascript
// Example of using the Library
function helloworld() {
  // L.canvas creates a new canvas context
  let c = L.canvas(W/2); 

  // L.icon draws an emoji character
  c.icon(127759, W/2, W/2); // 🌎
}
```

The library includes helpers for:

-   **`L.canvas()`**: Quickly scaffolding a 2D canvas.
-   **`L.Sound()`**: Simple sound effect generation for rockets and explosions.
-   **`L.Particles()`**: A basic particle system manager.
-   **`L.rnd()`**: A random number generator.
-   **`L.shape()`**: A utility to draw vector shapes from coordinate arrays.
-   **`L.Difficulty()`**: An algorithm to smoothly ramp up game difficulty over time.

This library provides just enough scaffolding to get beginners started without overwhelming them with a complex API.

## Learn by Doing: The Integrated Game Arcade

Perhaps the most significant barrier for a new programmer isn't learning the syntax, but the daunting task of setting up a development environment. BacioneJS obliterates this barrier.

The IDE comes pre-loaded with the full source code for several runnable JavaScript games, including:

-   Chess
-   Snake
-   Mars Lander
-   Missile Defense
-   Ski
-   Bike

A user can simply place their cursor inside the `function snake(){...}` block, tap the **Run** button, and immediately start playing. More importantly, they can then read the code, tweak a variable (like `speed`), and run it again to see the effect instantly. This tight feedback loop of experimenting, modifying, and observing is one of the most effective ways to learn.

Once a creation is complete, the **Export Game** feature generates a new, standalone HTML file containing just the game code and the necessary library functions, ready to be shared with the world.

## Final Thoughts

BacioneJS is a project with a clear vision and masterful execution. It's a love letter to vanilla JavaScript and a powerful statement about accessibility in technology. By focusing on a "satisfyingly simple" user experience, it succeeds where many other mobile editors have failed, creating a tool that is not just usable, but genuinely enjoyable.

It may not replace your desktop VS Code setup for large-scale application development, but that's not its goal. Its purpose is to put the power of creation into the hands of anyone with a phone, to spark curiosity, and to provide a frictionless first step into the vast world of programming.

The project is licensed under the GPL v3, encouraging community contribution and modification. If you've ever been frustrated by the limitations of mobile coding or are passionate about making programming more accessible, I urge you to visit the [BacioneJS GitHub repository](https://github.com/bacionejs/editor), download the `bacionejs.html` file, and give it a try. You might just be surprised by how much you can build with a "big kiss" of simplicity.

</details>
