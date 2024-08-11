## Brochure

[![Info](README.JPG)](bacione.html)

## How To Download
[![How To Download](README2.JPG)](bacione.html)

## Links
- [Live](https://bacionejs.github.io/editor):
  - the editor only works with Chrome browser, tablet or phone
  - however, exported games, which remove the editor first, have no limitation
- [Download](#How-To-Download)
  - download bacione.html
  - open your file manager
  - click bacione.html to run in your Chrome browser
  - click Run to play the Ski game
- [Help.pdf](Help.pdf) - same as help inside the editor
- [Games.pdf](Games.pdf) - tutorial for Ski and Marslander
- [YouTube](http://www.youtube.com/@bacionejs) - product demo
- [Reddit](https://www.reddit.com/r/bacionejs) - reddit discussions
- [Github](https://github.com/bacionejs/editor/discussions) - github discussions

### Why Choose This IDE?

Discover the ultimate free IDE code editor designed specifically for programming **small** JavaScript games on your **phone offline**! This phone editor was created because many people don't have a computer, and other phone editors lack important features. 

Bacione means "big KISS," as in "Keep It Satisfyingly Simple." It offers **less clicks** compared to other phone editors, with common keys accessible in one click and context-aware logic that reduces the need for repetitive actions. Refactoring code is easier, and you have a fully programmable keyboard where you can create your own icons and functions. Designed for phones and tablets, it requires no setup and operates as a single file that's easy to share. Written in plain vanilla JavaScript with no dependencies, it's free (GPL license), contains no ads, and runs directly from your Android file manager in the Chrome browser. The editor itself is only 7 kilobytes, and is easy to modify and customize right within the editor. Plus, it supports swipe and longpress-repeat for enhanced usability.


## Features

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

This editor was created because many people don't have access to a computer, but they do have a phone. My purpose was to create an editor that could be used for learning programming, making it suitable for beginners. It's also ideal for experienced programmers who sometimes find programming small games on a tablet or phone more relaxing than on a laptop or desktop. Given its intended purpose, some limitations are to be expected:

- **Save Mechanism:** The save function in the editor is limited by HTML constraints. As a workaround, a **new** timestamped file is generated each time you save. If you're saving to your Downloads folder, it's important to keep it organized—ideally, free of files from other purposes, as these can accumulate over time. To prevent clutter, it's best to immediately move downloaded files for other purposes into a different folder. A cluttered Downloads folder can make it difficult to quickly locate the most recent timestamped file, which is essential for reopening your work. Also, periodically delete older editor HTML files, keeping only the most recent version.

- **Diff Function:** The Diff function is **naive** and will not produce accurate results. It is designed to provide only an approximate indication of progress since the file was opened or last saved, so use it with caution.

- **Game Size and File Support:** The editor is not designed for large games or multi-file projects. This is because opening an HTML file from the File Manager on Android in the Chrome browser doesn't support multiple files—everything has to be contained within a single, monolithic HTML file. This also means that external images or audio files cannot be used. Programmatically created elements can be utilized instead; for example, the Marslander game uses vector graphics and a noise generator, and several other games utilize emojis.

- **Debugging Limitations:** While the editor includes a debug function that allows you to display variable values and will direct you to the line of code where an error occurs, it lacks more advanced debugging capabilities. Unlike some integrated development environments (IDEs), this editor does not support stepping through code line by line or provide the complex support that a browser console offers. This may make diagnosing and fixing issues more challenging for users.

If this editor doesn't support your needs, you might consider trying Neovim with Termux and Apache. You can find my configuration for those tools [here](https://github.com/bacionejs/termux).


## Issues

- **Keyboard Size/Position Issue**: When opening the editor on a tablet, the keyboard may appear the wrong size. This issue only applies to tablets; on a cell phone, the keyboard width will match the width of the phone. On a tablet, the keyboard should be half the width of the tablet and located in the lower right corner. If you use your left thumb to type instead of your right thumb, you can move it to the left side using the "Edit the Editor" functionality. If the keyboard appears incorrectly, please refresh the page to adjust it to the correct size.
- **Cursor Misalignment**: Swiping up hard at the end of the file in the editor window can cause the cursor to become misaligned with the text. A suggested workaround is to back off a little bit from the end.

## Notes

- This editor only supports portrait mode.
- **Copying and Pasting**: You must use the internal copy and paste buttons in the editor to copy and paste code within the editor. To copy code from external sources, use system copy and paste techniques, such as long pressing and then choosing copy and paste.
- **Custom Keyboard Functionality**: This editor is particularly useful because it features a custom keyboard where all the main functionality is accessible with one click. To support this, 22 of the 32 special characters, which are important to programming, are accessible with one click, while the remaining 10 are accessible via the Shift key. Note that the space key is very small and located in the bottom right corner. Additionally, the backspace and return keys are on the second row because they coordinate with other keys often. For example, to cut text, you press copy and then backspace, and to unselect, you press the return key. If you don't like this layout, you can easily change it by using the "Edit the Editor" option found at the miscellaneous button, represented by a diamond symbol.

