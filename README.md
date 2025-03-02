# Bacione Brochure

[![Info](README.jpg)](bacione.html)

## Install
- Download [bacione.html](https://raw.githubusercontent.com/bacionejs/editor/main/bacione.html)
- Open your file manager
- Tap `bacione.html` to launch in Chrome
- Click `Run` to play the Ski game

## Links
- [Live Demo](https://bacionejs.github.io/editor/bacione.html) - Run from GitHub
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
IDE to feature a fully custom keyboard. These features simplify installation, enable rapid enhancements and reduce editing frustrating.

## Features
- **Run**: Instant code execution
- **Save/Export**: Save or share your work
- **Zoom**: Adjust text size
- **Fullscreen**: Expand your workspace
- **Themes**: Light and dark modes
- **Rename**: Find and replace
- **Superstar**: Highlights all instances of the current word
- **Editing**: Cut, copy, paste, undo, redo
- **Code Assistance**: Autocomplete, auto-indent, auto-comment
- **Debugging**: Basic error detection
- **Diff**: Compare changes
- **Pickers**: Icon and color selectors
- **Gestures**: Swipe and long-press support
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

## Limitations
- **Compatibility**: Requires Chrome on phones or tablets. Exported games have no such restriction.
- **Single-File**: Not suited for large or multi-file projects. Android’s file manager limits Chrome to a single HTML file, excluding external assets like images or audio. Use programmatic alternatives (e.g., vector graphics, emojis, noise generators) as seen in Marslander.
- **Alternative**: For complex needs, try [Neovim with Termux and Apache](https://github.com/bacionejs/termux).

## Detailed Notes
References to **change** below pertain to the **Edit-the-Editor** feature (Miscellaneous button, diamond icon).

- **Run**: Executes or stops the game which contains the cursor. The square game frame appears above the keyboard for a quick 2-click edit-run cycle. For a larger frame, tweak the editor, library, or export the game (7-click cycle).
- **Save/Export**: Creates a new timestamped file. Keep Downloads folder clean; delete old versions.
- **Zoom**: Aids precision in cursor positioning. Swipe up on Zoom to toggle fullscreen.
- **Fullscreen**: Swipe up on Zoom to toggle, giving more real estate for navigation and editing.
- **Themes**: Toggle light/dark by swiping Miscellaneous up. Add more via **change**.
- **Rename**: Highlights matches as you type; Find (forward-only) activates on whole-word match.
- **Editing**: Use editor buttons for cut (copy + backspace), copy, and paste internally; system copy/paste for external code. Selection is context-aware—selects words, lines, paragraphs, or blocks with one tap (Copy button). Multi-tap Copy expands selection; arrows fine-tune it. Enter moves cursor to selection end. Watch [YouTube](http://www.youtube.com/@bacionejs) for demo.
- **Code Assistance**: Space key indents (no Tab). Enter preserves indentation. Minimize horizontal whitespace; use vertical spacing instead (see Marslander example). Autocomplete inserts word. Comment button comments code and copies it to paste buffer for easy editing; revert by uncommenting.
- **Debugging**: Errors detected on Run, not live. Error view shows message and positions cursor at issue. Block character mismatches (e.g., missing paren) trigger a count-check message.
- **Diff**: Basic, approximate change tracking since open/save.
- **Pickers**: Color/Icon codes go to paste buffer—tap Paste to insert.
- **Help**: Tap anywhere to dismiss the Help view.
- **Examples**: Keep game code short for one-gesture scrolling (see Marslander example).
- **Keyboard**: One-tap access to 22 key programming characters; 10 more via Shift. Space is small (bottom-right); backspace and return are on row two for combo efficiency (e.g., copy + backspace = cut). Adjust layout via **change**. Adapts to screen size—full width on phones, half-width on tablets. Lower-right on tablets; left-thumb users can **change** it.
- **Design**: Tap to move cursor; left-right arrows refine position. No Home/End keys.
- **Self-Editable**: Modify Bacione within itself. Save creates a new timestamped file—reopen it to test changes. If it fails, revert to the previous version. Best for simple tweaks; use [Neovim](https://github.com/bacionejs/termux) for complex edits.
- **Additional Notes**:
  - **Closing Views**: Tap anywhere to dismiss Help, Miscellaneous, Diff, or Error views.
  - **Emoji Load**: Initial Miscellaneous view may lag as icons load.

