# littleJS

> Version 0.2 :memo:  
> My own and very little library for JavaScript.

## Generic
- `get` : select an element.
  - `#` select an ID
  - `.` select a list of class
  - `~` select a tag like header or footer
- `rand` : return a random number.
- `ucFirst` : add a majuscule to a string.
- `plural` : according to a number, display singular or plural

## Storage
- `storage` : easy way to use localStorage.
- `cookie` : create, modify, read or delete a cookie.

## CSS to JS
- `getVariableCSS` : get the value of a CSS variable.

## Others
- `download` : make plain text downloadable.

# Notes
The `cookie` function works pretty well. However, if you use your cookies with true or false value, you'll need to be aware cos the result will be "true" and "false".

 ```JS
 // Incorrect
 if (cookie("read", "myCookie")) {
  // do this and that
 }
 
 // Correct
 if (cookie("read", "myCookie") == "true") {
  // do this and that
 }
 ```
 
 If anybody know how to fix this problem, I'll do the changes.
 
 # Changelog
 
 - 0.2 : new functions as `cookie` and `getVariableCSS` 
 - 0.1 : Initial release
