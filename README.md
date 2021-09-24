![Header](https://github.com/n-deleforge/littleJS/docs/header.png)

<div align="center">
An easy and light library for Javascript.

[![GitHub license](https://img.shields.io/github/license/n-deleforge/littleJS?style=for-the-badge)](https://github.com/n-deleforge/littleJS/blob/main/LICENCE)
![GitHub last commit](https://img.shields.io/github/last-commit/n-deleforge/littleJS?style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/n-deleforge/littleJS?style=for-the-badge)](https://github.com/n-deleforge/littleJS/network)
[![GitHub stars](https://img.shields.io/github/stars/n-deleforge/littleJS?style=for-the-badge)](https://github.com/n-deleforge/littleJS/stargazers)
![GitHub file size in bytes](https://img.shields.io/github/size/n-deleforge/littleJS/littleJS.min.js?style=for-the-badge)
</div>

# Features

Here the current list of the different functions of littleJS.

**DOM** :
- `get` : select an element.
  - `#` select an ID
  - `.` select a list of class
  - `~` select a tag like header or footer

**Generic** :
- `rand` : return a random number.
- `randomName` : return a random value (should not be used for secure things).
- `ucFirst` : add a majuscule to a string.
- `plural` : according to a number, display singular or plural

**Local Storage and cookies** :
- `getStorage` : get a local storage.
- `setStorage` : set a local storage.
- `remStorage` : remove a local storage.
- `getCookie` : get a cookie.
- `setCookie` : set a cookie.
- `remCookie` : remove a cookie.

**Promise** :
- `wait` : return a promise which is resolved after a timeout given

**CSS to JS** :
- `getVariableCSS` : get the value of a CSS variable.

**Uncategorized** :
- `download` : make plain text downloadable.
- `downloadImage`: download a picture from an URL.
- `navigate`: create a link - with a new tab if necessary

# Changelog
 
 - 0.3.5 : new function with `wait`.
 - 0.3.4 : new function with `navigate`.
 - 0.3.3 : new functions with `randomName` and `downloadImage`.
 - 0.3.2 :  a few changes, multiples functions for local storage and cookies (get, set, rem).
 - 0.3.1 : actually, I decided to remove all the debug part cos I want to keep it light. The problem of the cookie function has been corrected thank to [NamedRoger](https://github.com/NamedRoger). I didn't choose his method but it seems to work well too.
 - 0.3 : documentation added for each functions, a lot more debug info
 - 0.2 : new functions with `cookie` and `getVariableCSS` 
 - 0.1 : Initial release
