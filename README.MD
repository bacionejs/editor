# Bacione Brochure

[![Info](README.JPG)](bacione.html)

## Install
- Download [bacione.html](https://raw.githubusercontent.com/bacionejs/editor/main/bacione.html)
- Open your file manager
- Tap `bacione.html` to launch in Chrome
- Click "Run" to play the Ski game

## Links
- [Live Demo](https://bacionejs.github.io/editor) - Run from GitHub
- [YouTube](http://www.youtube.com/@bacionejs) - Product demos
- [Games.pdf](Games.pdf) - Tutorials for Ski and Marslander
- [GitHub Discussions](https://github.com/bacionejs/editor/discussions)

## Bacione?
Bacione means big KISS as in Keep It Satisfyingly Simple.

## Purpose
Programming small javascript games on a phone offline

## Mission
Create the most thumb-friendly IDE in its class

## Unique
As of March 2025, Bacione appears to be the only serverless JavaScript IDE coded purely in JavaScript. It runs offline, launching directly from the Android file manager in Chrome, and features a built-in keyboard, delivering a distinctive, streamlined solution for mobile game development.

## Design
Bacione aims to deliver a smooth coding experience for users without a computer or those who just prefer programming small JavaScript games on a phone or tablet. It tackles key challenges: working offline and typing without an external keyboard (using a thumb or stylus on-screen). While many editors and keyboard apps serve this niche, they fall short. The main pain points are excessive clicks for 1) accessing special characters and 2) refactoring code. Typically, special characters demand an extra-keys feature or a separate keyboard app, and refactoring involves cumbersome steps. Bacione resolves these by integrating a built-in keyboard for quick character access and streamlined refactoring tools needing fewer clicks. This design frees up screen space, ensuring a larger, uncluttered coding area.

## Features
- **Run**: Instant code execution
- **Save/Export**: Save or share your work
- **Zoom**: Adjust text size
- **Fullscreen**: Expand your workspace
- **Themes**: Light and dark modes
- **Rename**: Find and replace
- **Search**: Incremental, highlights all matches
- **Superstar**: Highlights all instances of the current word
- **Editing**: Cut, copy, paste, undo, redo
- **Code Assistance**: Autocomplete, auto-indent, auto-comment
- **Debugging**: Basic error detection
- **Diff**: Compare changes
- **Pickers**: Icon and color selectors
- **Gestures**: Swipe and long-press support
- **Help**: Built-in guide
- **Examples**: Game templates included
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

## Notes
References to **change** below pertain to the **Edit-the-Editor** feature (Miscellaneous button, diamond icon).

- **Edit-the-Editor**: Modify Bacione within itself. Save creates a new timestamped file—reopen it to test changes. If it fails, revert to the previous version. Best for simple tweaks; use [Neovim](https://github.com/bacionejs/termux) for complex edits.
- **Run**: Executes or stops the game which contains the cursor. The square game frame appears above the keyboard for a quick 2-click edit-run cycle. For a larger frame, tweak the editor, library, or export the game (7-click cycle).
- **Keyboard Size**: Adapts to screen size—full width on phones, half-width on tablets.
- **Keyboard Position**: Lower-right on tablets. Left-thumb users can **change** it.
- **Custom Keyboard**: One-tap access to 22 key programming characters; 10 more via Shift. Space is small (bottom-right); backspace and return are on row two for combo efficiency (e.g., copy + backspace = cut). Adjust layout via **change**.
- **Selection**: Context-aware—selects words, lines, paragraphs, or blocks with one tap (Copy button). Copy selects and copies; backspace cuts; Enter moves cursor to selection end. Multi-tap Copy expands selection; arrows fine-tune it. Watch [YouTube](http://www.youtube.com/@bacionejs) for demo.
- **Copy/Paste**: Use editor buttons internally; system copy/paste for external code.
- **Formatting**: Space key indents (no Tab). Enter preserves indentation. Minimize horizontal whitespace; use vertical spacing instead (see Marslander example).
- **Comment**: Comments code and copies it to paste buffer for easy editing. Revert by uncommenting if needed.
- **Navigation**: Tap to move cursor; left-right arrows refine position. Zoom aids precision. No Home/End keys.
- **Game Size**: Keep code short for one-gesture scrolling.
- **Fullscreen**: Swipe up on Zoom to toggle.
- **Closing Views**: Tap anywhere to dismiss Help, Miscellaneous, Diff, or Error views.
- **Emoji Load**: Initial Miscellaneous view may lag as icons load.
- **Pickers**: Color/Icon codes go to paste buffer—tap Paste to insert.
- **Errors**: Detected on Run, not live. Error view shows message and positions cursor at issue. Block character mismatches (e.g., missing paren) trigger a count-check message.
- **Diff**: Basic, approximate change tracking since open/save.
- **Save**: Creates a new timestamped file. Keep Downloads folder clean; delete old versions.
- **Themes**: Toggle light/dark by swiping Miscellaneous up. Add more via **change**.
- **Rename**: Highlights matches as you type; Find (forward-only) activates on whole-word match.












## Brochure

[![Info](README.JPG)](bacione.html)

## Install
- Download [bacione.html](https://raw.githubusercontent.com/bacionejs/editor/main/bacione.html)
- Open your file manager
- Click bacione.html to run in your Chrome browser
- Click Run to play the Ski game

## Links
- [Live](https://bacionejs.github.io/editor) - run from github
- [YouTube](http://www.youtube.com/@bacionejs) - product demo
- [Games.pdf](Games.pdf) - tutorial for Ski and Marslander
- [Github](https://github.com/bacionejs/editor/discussions) - github discussions

## Bacione?
Bacione means big KISS as in Keep It Satisfyingly Simple.

## Purpose
Programming small javascript games on a phone offline

## Mission
Create the most thumb-friendly IDE in its class

## Unique
As of March 2025, Bacione appears to be the only serverless JavaScript IDE coded purely in JavaScript. It runs offline, launching directly from the Android file manager in Chrome, and features a built-in keyboard, delivering a distinctive, streamlined solution for mobile game development.

## Design
Bacione aims to deliver a smooth coding experience for users without a computer or those who just prefer programming small JavaScript games on a phone or tablet. It tackles key challenges: working offline and typing without an external keyboard (using a thumb or stylus on-screen). While many editors and keyboard apps serve this niche, they fall short. The main pain points are excessive clicks for 1) accessing special characters and 2) refactoring code. Typically, special characters demand an extra-keys feature or a separate keyboard app, and refactoring involves cumbersome steps. Bacione resolves these by integrating a built-in keyboard for quick character access and streamlined refactoring tools needing fewer clicks. This design frees up screen space, ensuring a larger, uncluttered coding area.

## Features
- Run (instant code execution)
- Save/Export
- Zoom
- Fullscreen
- Themes, light and dark
- Rename (find/replace)
- Incremental search
- Highlight all occurrences of current word (superstar)
- Cut/Copy/Paste
- Undo/Redo
- Auto complete
- Auto indent
- Auto comment
- Debugging
- Diff
- Icon Picker
- Color Picker
- Supports swipe and longpress-repeat.
- Built-in Help
- Game examples
- Less clicks compared to other phone editors.
- Common keys are one click.
- Context aware logic reduces clicks.
- Less work to refactor your code.
- Fully programmable keyboard.
- Create your own keyboard icons and functions.
- Designed for phones and tablets.
- No setup required.
- One file.
- Easy to share.
- Offline.
- Serverless.
- Run from the Android file manager in Chrome browser.
- Plain vanilla JavaScript.
- No dependencies.
- Free (GPL license)
- No ads

- Easy to modify editor.
- Edit the editor in the editor.
- Editor is only 7 kilobytes.


## Limitations
- **Compatibility**: The editor only works with the Chrome browser on a tablet or phone. However, exported games, which remove the editor, have no such limitations.
- **Multi-file:** The editor is not designed for large games or multi-file projects. This is because opening an HTML file from the File Manager on Android in the Chrome browser does not support multiple files—everything has to be contained within a single, monolithic HTML file. This also means that external images or audio files cannot be used. Programmatically created elements can be utilized instead; for example, the Marslander game uses vector graphics and a noise generator, and several other games utilize emojis.

If this editor does not support your needs, try [Neovim with Termux and Apache](https://github.com/bacionejs/termux).

## Notes
Any reference to **change** below refers to the **Edit-the-Editor** functionality found in the Miscellaneous button, represented by the diamond symbol.
- **Edit-the-Editor**: The editor can be edited within the editor. However, it is not live, so you must click Save and open the newly created timestamped HTML file. If the new one is broken, open your prior one. This feature is to support simple changes. Complex changes should be performed in a more robust environment such as [Neovim](https://github.com/bacionejs/termux).
- **Run**: The Run button runs or stops the game which contains the cursor. For simplicity, the game frame is square and is displayed above the keyboard. This makes it easy to switch back and forth between editing and running (**2 click roundtrip**).  If this seems limiting, and you want a larger game frame then you could **change** the editor or the canvas sizing code in the Library or do not even use the Library. Also you can Export whatever is in the editor view with the Export-Game button. You might even want to **change** how the exportgame() function works. The downside of using Export is that you have to then run that HTML file from the Android file manager (**7 click roundtrip**).
- **Keyboard Size**: The size of the keyboard is whatever remaining area there is after accounting for a square game frame. This means that on a phone the keyboard width is approximately the width of the screen and on a tablet approximately half the width of the screen.
- **Keyboard Position**: On a tablet, the keyboard is located in the lower **right** corner. If you use your left thumb to type instead of your right thumb, you can **change** it.
- **Custom Keyboard Functionality**: This editor is particularly useful because it features a custom keyboard where all the main functionality is accessible with one click. To support this, 22 special characters, which are important to programming, are accessible with one click, while the remaining 10 are accessible via the Shift key. Note that the space key is unusually small, located in the bottom right corner. Additionally, the backspace and return keys are on the second row because they coordinate with other keys often. For example, to cut text, you press copy and then backspace, and to unselect, you press the return key. If you do not like this layout, you can **change** it.
- **Selection**: A major advantage of this editor is efficient selection. The selection is context-based; depending on where the cursor is, it will select a word, a line, a paragraph, or a block of code. To see how selection works, you can watch the [YouTube](http://www.youtube.com/@bacionejs) video. Selection is performed with the Copy button, meaning, two things happen at once. This is mainly to reduce the amount of buttons. Cut is two steps: click Copy (selects and copies) and then click Backspace (deletes selection). Clicking the Enter button after a Copy will move the cursor to the end of the selection. If Cut (Copy/Backspace) contains a line then the cursor will be advanced one line. This is because often it is the intent of the user when cutting a line to paste it after the next line. This helps reduce the number of clicks when refactoring code. Selection (Copy) can also be used for navigation, for example to move the cursor to the end of a block, place the cursor before the opening block character, click Copy, click Enter. However, do not do that if you have something in the paste buffer that you intend to use. Clicking Copy multiple time will extend the selection according to the selection rules, and the arrow keys will extend (or unextend) a selection one character at a time.
- **Copying and Pasting**: You must use the internal copy and paste buttons in the editor to copy and paste code within the editor. To copy code from external sources, use system copy and paste techniques, such as long pressing and then choosing copy and paste.
- **Formatting**: On a phone, the real estate of the editor is at a premium, and you can not afford a lot of white space, especially horizontal white space. For indentation, you can use the Space key (there is no Tab key), and the Enter key will retain the prior indentation. Try to only use indentation for branches and loops and instead of indenting a function body, use vertical whitespace before and after. See the Marslander game for an example.
- **Comment Button**: The Comment button is very useful for debugging. When you press the Comment button, it comments the code and places a copy in the paste buffer. The next step is to paste that and then edit it. If you do not like the results of the new code, it is easy to delete that and uncomment the original.
- **Navigation**: Navigation is primarily done by touching the screen, so there are no Home, End, or vertical arrow keys. Instead, a left-right arrow is provided to help position the cursor accurately after touching the approximate location. The Zoom key, which increases the text size, can also assist in positioning the cursor in the correct place.
- **Suggested Size**: Since navigating code on a phone can be quite challenging, it is advisable to create games that are small enough to be scrollable with a single gesture.
- **Fullscreen**: Activating fullscreen mode will give you more real estate for navigating and editing your code. You can toggle fullscreen by swiping up on the Zoom button.
- **Closing Views**: There are no close buttons. To close a View, click anywhere or select an option. The Views are: Help, Miscellaneous, Diff and Error.
- **Emoji Generation**: When opening the Miscellaneous View the first time, it will take a moment as the icons are loaded.
- **Pickers**: Color-Picker and Icon-Picker put a code in Paste, so do not be alarmed if it seems nothing has happened. Click the Paste button to see the code.
- **Error Detection**: This editor has no real-time error detection (as you type). Errors are discovered when you click Run. An error message will be displayed and when the error is dismissed (by clicking anywhere on that View), the cursor will automatically be positioned in the code where the error occurred. Sometimes the error message does not make it obvious when you merely forgot a paren or other block character that requires a matching pair. To help with this an adjunct process will **naively** count all block characters to ensure there is an even count and display an additional message in the error View.
- **Diff Function:** The Diff function is **naive** and will not produce accurate results. It is designed to provide only an approximate indication of progress since the file was opened or last saved.
- **Save Mechanism:** The save function in the editor is limited by HTML constraints. As a workaround, a **new** timestamped file is generated each time you save. For simplicity, the games and editor are saved together as one file. If you are saving to your Downloads folder, it is important to keep it  free of files from other purposes, as this can make it difficult to quickly reopen your work. Also, periodically delete older editor HTML files, keeping only the most recent version.
- **Themes**: The editor offers both light and dark themes for a customizable viewing experience. You can toggle between themes by swiping up on the Miscellaneous button. You can also **change** or add more.
- **Rename**: Highlights matches as you type, but the Find button remains disabled until a whole-word match is detected. Find works forward from current location.
