## Brochure

[![Info](README.JPG)](bacione.html)

## Install
- Download [bacione.html](https://raw.githubusercontent.com/bacionejs/editor/main/bacione.html)
- Open your file manager
- Click bacione.html to run in your Chrome browser
- Click Run to play the Ski game

## Links
- [Live](https://bacionejs.github.io/editor)
- [YouTube](http://www.youtube.com/@bacionejs) - product demo
- [Games.pdf](Games.pdf) - tutorial for Ski and Marslander
- [Github](https://github.com/bacionejs/editor/discussions) - github discussions

## Bacione?
Bacione means big KISS as in Keep It Satisfyingly Simple.

## Purpose
Programming small javascript games on a phone offline

## Mission
Create the most thumb-friendly IDE in its class

## Design
The design goals of this editor are to provide a pleasant experience for those who do not have a computer or simply prefer a phone or tablet for programming small JavaScript games. Additional constraints addressed are being offline and not having an external keyboard (typing on the screen with a thumb or stylus). While there are many editors and keyboard apps which fit this use case, they are all suboptimal. The two main issues are reducing clicks for: 1) accessing special characters and 2) refactoring. To solve 1, it is necessary to support an extra-keys capability or install a keyboard app. To solve 2, it is necessary to make refactoring require fewer clicks. After solving these two issues, a large portion of the screen is taken, leaving little room for the code area. To address this, the editor includes a built-in keyboard and efficient refactoring tools.

## Features
- Zoom
- Fullscreen
- Cut/Copy/Paste
- Undo/Redo
- Auto complete
- Auto indent
- Auto comment
- Themes, light and dark
- Debugging
- Diff
- Save/Export
- Rename (find/replace)
- Incremental search
- Highlight all occurrences of current word (superstar)
- Icon Picker
- Color Picker
- Built-in Help
- Instant game play
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
- Plain vanilla JavaScript.
- No dependencies.
- Free (GPL license)
- No ads
- Run from Android file manager in Chrome browser.
- Easy to modify editor.
- Edit the editor in the editor.
- Editor is only 7 kilobytes.
- Supports swipe and longpress-repeat.


## Limitations
- **Compatibility**: The editor only works with the Chrome browser on a tablet or phone. However, exported games, which remove the editor, have no such limitations.
- **Multi-file:** The editor is not designed for large games or multi-file projects. This is because opening an HTML file from the File Manager on Android in the Chrome browser does not support multiple files—everything has to be contained within a single, monolithic HTML file. This also means that external images or audio files cannot be used. Programmatically created elements can be utilized instead; for example, the Marslander game uses vector graphics and a noise generator, and several other games utilize emojis.

If this editor does not support your needs, try Neovim with Termux and Apache. You can find my configuration for those tools [here](https://github.com/bacionejs/termux).

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
