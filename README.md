
<a href="//bacionejs.github.io/editor/bacionejs.html" target="_blank"><img src="https://github.com/user-attachments/assets/b77934b3-9422-4f4a-b7b3-14d1b8c5042e" /></a>

---

[Try it][samplegame] (includes sample game [^1] 🎮)  

---

Entire app source-code fits on a 3x5 card  
No server or third-party library.  

<a href="https://bacionejs.github.io/bacionejs/viewsource.html?b=1&file=https://raw.githubusercontent.com/bacionejs/editor/main/bacionejs.html" target="_blank"><img width="200" src="https://github.com/user-attachments/assets/e1497eaf-e506-4471-ac51-74e26c7e668d" /></a>

---

- `Run` Runs the game which contains the cursor. To create your own game, simply create a new function.  
- `Copy` Begins or extends selection and puts it in the `Paste` buffer. Depending on what is to the right, selects: word, line, paragraph or pairs. Press `Enter` to exit this mode. Also, you can **Cut** text by pressing `Copy` and then `Backspace`.  
- `Find` Finds the word under the cursor. Also, you can **Rename** variables by pressing `Find`, typing a new word, and then pressing `Find` repeatedly to replace or `Enter` to skip.  
- `Comment` Toggles comments and puts the line in the `Paste` buffer.  
- `Complete` Completes word.  
- `Arrows` Moves cursor or extends selection.  
- `Save` Saves game and editor to a timestamped file.  
- `Undo`, `Redo`, `Fullscreen` and `Zoom`  
- 👍  Hold alphanumeric keys as an alternative to `Capslock`. Hold function keys to repeat a command.  
- 🐞 Runtime errors display a message and places the cursor at the error.  
- 🚩 Syntax errors turn the cursor red while typing.  

---

[^1]: To use the joystick in the sample game, hold with your thumb in a comfortable place like the lower right, and slide, don't lift.


[samplegame]: https://bacionejs.github.io/editor/bacionejs.html#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
