# BacioneJS Brochure

[![Info](README.jpg)](bacionejs.html)

## Install
- Download [bacionejs.html](https://raw.githubusercontent.com/bacionejs/editor/main/bacionejs.html)
- Open your file manager
- Tap `bacionejs.html` to launch in Chrome
- Click `Run` to play the Ski game

## Links
- [Live Demo](https://bacionejs.github.io/editor/bacionejs.html) - Run from GitHub
- [YouTube](http://www.youtube.com/@bacionejs) - Product demos
- [Games.pdf](Games.pdf) - Tutorials for Ski and Marslander
- [GitHub Discussions](https://github.com/bacionejs/editor/discussions)

## Bacione?
Bacione means big KISS as in Keep It Satisfyingly Simple.

## Purpose
Programming small JavaScript games on a phone offline

## Mission
Create the most thumb-friendly IDE in its class

## Unique
As of March 2025, BacioneJS stands alone as the [only](//github.com/search?q=serverless+javascript+ide+language%3Ahtml&type=repositories) serverless JavaScript IDE built entirely in JavaScript.
Also, the [only](//github.com/search?q=ide+%22custom+keyboard%22&type=repositories)
IDE with a fully custom keyboard. These features simplify installation, enable rapid enhancements and reduce editing frustrating.

## Features
- **Run**: Instant code execution
- **Save**: Saves games with editor
- **Export**: Removes editor
- **Zoom**: Adjust text size
- **Fullscreen**: Expand your workspace
- **Themes**: Light and dark modes
- **Rename**: Find and replace
- **Superstar**: Highlights all instances of the current word
- **Editing**: Cut, copy, paste, undo, redo
- **Code Assistance**: Auto-complete, auto-indent, auto-comment
- **Debugging**: Basic error detection
- **Diff**: Compare changes
- **Pickers**: Icon and color selectors
- **Gestures**: Swipe and long-press-repeat support
- **Help**: Built-in guide
- **Examples**: Games included
- **Efficiency**: Fewer clicks than competing editors
- **Keyboard**: Fully customizable, one-tap common keys
- **Design**: Optimized for phones and tablets
- **Setup**: None—just one file
- **Sharing**: Easy to send
- **Offline**: No internet required
- **Serverless**: No backend needed
- **Compatibility**: Runs from Android file manager in Chrome
- **Pure JS**: No dependencies, vanilla JavaScript
- **Free**: GPL licensed, ad-free
- **Lightweight**: Just 7 KB
- **Self-Editable**: Modify the editor within itself

## Details
- **Run**: Starts or stops the game containing the cursor. The square game frame appears above the keyboard for a fast 2-click edit-run cycle. For a larger frame, adjust the editor, library, or export the game (7-click cycle).  
- **Save/Export**: Generates a new timestamped file. Keep your Downloads folder tidy by deleting outdated versions.  
- **Zoom**: Enhances precision for cursor placement.  
- **Rename**: Highlights matches as you type; Find (forward-only) triggers on whole-word matches.  
- **Swipe**: Swipe up on a key for alternate functions:  
  - Save → Diff  
  - Zoom → Fullscreen  
  - Rename → Superstar Highlight  
  - Misc → Themes  
  - Characters → Shift-like behavior  
- **Editing**: Use editor buttons for cut (copy + backspace), copy, and paste within BacioneJS; rely on system copy/paste for external code. Selection is context-aware—tapping selects words, lines, paragraphs, or blocks (Copy button). Multi-tap Copy expands the selection; arrows adjust it precisely. Enter moves the cursor to the selection’s end. See a demo on [YouTube](http://www.youtube.com/@bacionejs).  
- **Code Assistance**: Enter maintains indentation. The Complete button finishes words. The Comment button toggles code comments and copies them to the paste buffer for quick edits.  
- **Debugging**: The Error view displays the message and positions the cursor at the issue.  
- **Diff**: Offers basic, approximate change tracking since the file was opened or saved.  
- **Pickers**: Color/Icon codes are sent to the paste buffer—tap Paste to insert them.  
- **Keyboard**: One-tap access to 22 essential programming characters; 10 more via Shift. Space is compact (bottom-right); backspace and return are on row two for efficient combos (e.g., copy + backspace = cut). Adapts to screen size—full-width on phones, half-width on tablets (lower-right placement).  
- **Navigation**: Tap to place the cursor; left-right arrows fine-tune it. Keep game code concise for single-gesture scrolling. Minimize horizontal whitespace (see Marslander example).  
- **Self-Editable**: Edit BacioneJS within itself. Saving creates a new timestamped file—reopen to test changes. If it fails, open prior version. Ideal for small tweaks; use [Neovim](https://github.com/bacionejs/termux) for complex edits.  
- **Closing Views**: Tap anywhere to dismiss Help, Miscellaneous, Diff, or Error views.  
- **Emoji Load**: The initial Miscellaneous view may lag as icons load.  

## Limitations
- **Compatibility**: Requires Chrome on phones or tablets. Exported games have no such restriction.
- **Single-File**: Not suited for large or multi-file projects. Android’s file manager limits Chrome to a single HTML file, excluding external assets like images or audio. Use programmatic alternatives (e.g., vector graphics, emojis, noise generators) as seen in Marslander.
- **Alternative**: For complex needs, try [Neovim with Termux and Apache](https://github.com/bacionejs/termux).
