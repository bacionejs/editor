<img src="https://github.com/user-attachments/assets/caec5ab6-6c89-4188-b611-c3e9210144c5" />



---

[Try it][samplegame] (includes sample game [^1] 🎮)  

---

Entire app source-code fits on a 3x5 card  
No server or third-party library.  

<a href="https://bacionejs.github.io/bacionejs/viewsource.html?b=1&file=https://raw.githubusercontent.com/bacionejs/editor/main/bacionejs.html" target="_blank"><img width="200" src="https://github.com/user-attachments/assets/34429ad8-5fce-4865-9537-c9473eb1c554" /></a>


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


[samplegame]: https://bacionejs.github.io/editor/bacionejs.html#eJyNWe132jjW/85fwbIzGQkuik1C2uKKnvRlnnQ3s8NJ2yd5DoezFbYAD8ZyLZmYh/p/33Mlm0Cn3d0PMZYsXd33+9PNokhDE6u0rcUmS+RSbCSh+1YiTfuW38bzXOQ7QmGfizRSm1GeRqDjFEKlQRiRDmATpzB5D6tdpkzFfxNmBfsHuIebit/Ch5vrv7/jt+zDSqwleaDw4c3vd3YiVDlOBPakuUoLDRO4g9fwCXQoUwkf/vEW16kijQiFyfXdx/dvbt994LdsInITh4nUSPAPteO37G9qp00crgmFOI0NJEpljvRSmg+ZlBG/ZW/jxSIOi8TsyF4bkZvRfZf5INMIXwYwl3biCoQZDTzPq2ruRBRZdvmWj/dWACaiiGxpEC+IG2v8PuZWDrqPF2RydjZhq+zlBd3jb68XfPjHW2a/E1rZ3x4fel5VuTNClSRxJDUnAuaUj4lgZX/OStrtDnpEsF1/znY4eEmIYPnXrx7tkbl7wWlH5TEXGVd8TBQrOT569/Tne1Bsh6Nd74b+fFMLtVFbyYmCyFC3vscV25bdyOByO9h1I1OvjnLxyEkGJewgVwY0hJSP9w9Mi60kNHhgJhepToSRpIQdTuTK4ChXBkc6FIkkGjQOkjiV93FkVtw/1/jR5GotP5hdInl4GJPMkpHaoKvQKmi1CBqXEzy61W4jY1kut9wLJnySiJ3MCQ3u+J0K15rQ4DV/XSSJNPj+iX9aKEID61t8aq3mvLN2usmTi82CVtu5JFooaJ2ft9u37K2cF0tr+Am0P1FcY4mxhcrfiXBFFB8rZFeaV4xQu4CgH/KwyHPHcbuNroF+4dFcmiJP2ygRsYudQJHhmzglzAeC+/ooID33Pc+jX796gZUXPwQPbBEniVNaZ56IcN2p5+5kaIgHHgZhTflgqO+wXGQRGioy9ETfQS6/FFKb6zTeCMwQv+aYG1AiS7SixKOtiiLzrUWTRRozuAySCbPit0yvRCbJdOpB/8UMpj70r8CH/iUMoO/PYDoADy7sH47cW9/Hx2AG00voD8A+hm5iiB+HgH9uOIAr9zeD6TPw4Tl48MKRfmGHF/AchjOYXsEVDO34hT0I357BBVzZERJBYkPL0oGs5RgZvgIPrmazOiQyvi9H9+cD2I1uzgewykYXkI/uzy89ECMPzMiDVru9QuvuM7bK+v3A+hvTEg1+8DbrUhkrIWM7WuGeJ4PsG7fYRyVEu4r/oXYQcZtriZ2q7RsvSDT2vXqD8yTBMya4TdIk2kFUUtDWt6LuBdyfD+qt7XaGwR8qTQTt6m5kggwTgI7TwwTmFZIdNsQLQjJmejwydMz8IX19LAQIuO+yF2DyQlLImOGe3VfZJ2YSgn4BzfKMid7k/fkAMpaf+x58XumE/GR11r30KvA972cYej/TzxTdrgpadehk1ZHj2fD+kdddWMfoD8DHsPCgjyY+vNvZGUytA7rJi4OZC74XoYm3crQQiZZQjjzYjTzY4gvae+iBNqMh6BWaXOBDp5Gzvs0GhO4L5mhwSyMomDZ8aG2tM/GYHq9ArQUFK3mOdW/Mhq/6BctH972C5UHBdm6+e9NlV72bLhsEBduWnBSsfOm98kd9n3bv3bReGe4HBROGezhMI+7ZMyOJCXb3A76e9dwJQ1uxZJklSscq/ZPLFqyE4kcuGy/IXxridE+QcB+95SX3zs4KVksdOEM6xyjQCwtXgizX6F7dS5TZOSPOWeF8XNEcQ6xkDXG6R6YLm+qdyMwfVM1apD72XhWsHFt9jlBrqN4fWKjRRHV82Mo8Hfb6WBMOD5EJ2/VxNGFlv2AlxWC4HIKlSxuzsJr2tzHRkPKgcMHQ+au3WHSeorzBCaSACbXYwpaPgh2MWp0GSXEcJHVldGGyESW/Px94DQRTGwsdvrE6nFpdsRLxAa2jwxqSY8kHDTnfiBJ0lsSG+0c1WtQ+O3nfHYANzlQ+tifCrAZvXelbqJzgypg/D+J+P6B7C9143J28P7+EiOddwhrHZBc0QCoWRnxUBDPXknYtLrUvVgV2RZgoLfEgd0yu2TXLCr0ie+R4W46arAfb3ahJeJA7GSyriHZGR+znysHJEbGTfTakXYI+eZ5TxIs1nMMyfIJTNG+A6DFiRPR2Kv/wSP4SdkGk9nUq6N4Hh+CvHldxIomrA2V/wkrY9SdsR1/enz+ngQsvaxRaNSzlmu+vR9MZNEkJtcGnswB5JbRyQpO1PbvWD2x3jTYqvg7QR8iaBg0gJr5HgzWLpIi4j2DYrnTM67pKWSK067OLY7YgPx+AR78zVVVwmkwwlVjDJTJdmhV17Aa1XlUScfwaNNKcmJkxppIIQZGROVkfgTDHdQ3CXHQhIiZrBMTBGtFrj9sfa7RDEVzXoWhDds2si6xZCWu2A7scfOg8rmIjvxe065OgbdR5nAXjBflUp6Kzs6N9nyjNNWtM5Ci7fX9xolhERltHkZ/r49A/QGEX/PNvnGFutVeBiKKRtYcAjVc7Sfl4/l9FTWJGPrPXQVnRb2yI1JFKbQjVGMKq3N5BTuCsYkjlVSeJN7Iz6iyKcKVjcQJvFSv7A8xEFhtePumaKJbUGdo7MW+8II7uASR9X9cKdb0/uPjA82jw6Sm9nljL+eCa31nZ0ghdrLbHCcU1PcZOa7q/ezLlMb1KJlqeeIw68ZhvK/Lx3trqvnWEYz+YV61jRzjc6fdPczKRG5kaYsSS7uttkQoLnGRzFe2YyDKZRm9WcRKRw5cwl8LId0ebadVqaHU02rJDmZGleaNSI1PDO939RuTLOB15QSaiKE6XI68KRboVem9UEa76wrI0SlUqKzx6r7YyXyTqcbSKo0imVSdQaYj0SrORacH/yceuaFvH/k6jou5KPPADa+7ADmVL6VgrDekMog7sRZKthIN6FYV7HqepzO1dFW7c4EbGy5UJWjbLhfyBOWKgecisyBDxSG7jUE7iUiZ3eHcKQvZo77v33SgI2cqS4DfdKNDNh14nKzuBPnxz4we8LXzEq/VC5RsSWXBqn7R6Ml+NdBfAGBMzl3+/HBXZ4AvDSPuoMCEuaCDYRmRky8df2Fz+fyzzN0XefN5SGrjrzVGR/kKDDMu/LaVfAL+8/f2334TJ45LQ+nLf98GnjU8iOD/wd9R4yZrqkDHbggHJMybTCOxtxcCcZ2wuGyINBVIe3FL2iexr2iVE9uf03A5ot0vKc0GrozObjlN9nFeT3GtpRliYNb/06iw1IrYJos/OiObMG3S7kenqrx4cdzWO6r2G4wE9Pbbua9ljbUGqz10iG/bjQZTrqVdn3C0f46DHty4hWw6v+dRDi17PmE7iUBIPhofESvcn939XcYJpx57fsdvw4ZoWS0zxs8Otn2whpnzsCHxE39/CwIO461/0LjyUp7KhZDdzcs3HZG/rApZTZOypuFJYNtyyRSLMbyLD7P77/A8ZGiZTk8eYxOjhI5muYTujfLx9xYz6NS5lhN2SVyxUaSgM6Yw6vTX9+nU6o7SilExnJ+2Fuh3Y1DB0xOsiilUTxBRSPq/z0utisZA58WHOXG/zThh5MqBBK7UpYCXSVCZvhRHEo096+ifEICgfi2k8q6HXoO/TQ2ORGz6eTz+7437am+rzjDQ9Q4Ptsi2gY2UYxP8rkkJem4/xRpItzBn2cGRqx72my5aLTVZvAyy82fTzT3v56hdZZiqVqYlF8svoF4S9Iv+luhOb7KM6ovt59kPKWSJ2nGh0iVRFUiMytS8sl1ERSkJEGEJqG49hiMZIscqmFFIKmh4m5rYQxqltCNFAuyA+VKK2Dmq0aVQqOTG7TEIESw+WPiwlLHL55QgUKwTFpPO7DuMkEUblHQpLN/c/Ik4dglIMqXB8BMKQJVuKOEWSHg1QYYcZH0+SNMBDiGIL279KQ9ciQQUQBUvKtFEZOdVS5IB7HamtQ4Ud/QnBk47zqg+qyEP5LbuwqNfEXwoR/WrBjhNCs7ndxy0YcRyzLZqO+/YC4ITsJOoxE1p33NxBhHrpBXYj2+1jqT3wn+TTsIAlygKtYqEs92gH0tHi0ShlVh1g/gDY0JaRBRrbkAVceahMsGQX4A89u8qnlELLtkGPKX0pBCYYhHoDYJ4PPhKaDgcXbDCEq+EL/Hn2/IK9eAG+d3nFhn9KPPbQLcRdbB1ZzHrcQDxq7v8pibba2Iy3Heb9053pyju6NDWXzWeg67fLnh/8VwB25Fd4/ThtZ1zzA2zN+JhkLOlz9hw742PvFLV2VC7SpewE1weBMz7e2+5a5voa3SvPNdcy113H8QNbJmoukmtEHjxjyTHMbXpkF3BBK7zLHavq6Z8eexdN+wibUhG2pzS+6d3IqwKntHdbmZrbWBuZypx0MhWnRuaRekw7IPl4r5guuWRhEsvUPASK6d1h+H+BYlHJPfzZcft/kX9DE6GGoynZvDBGpXrsnZ0RS+NwQh8PBEvwcAzO7eh/IF9kHSDufxbIkyPhPQEPhWi3fnf/iAKLj8CWRnjCImAhAtiSAge3g0arYMufxc7/AkxkhRE=
