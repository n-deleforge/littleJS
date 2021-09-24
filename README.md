![Header](/docs/header.png)

<div align="center">

[![GitHub license](https://img.shields.io/github/license/n-deleforge/littleJS?style=for-the-badge)](https://github.com/n-deleforge/littleJS/blob/main/LICENCE)
![GitHub last commit](https://img.shields.io/github/last-commit/n-deleforge/littleJS?style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/n-deleforge/littleJS?style=for-the-badge)](https://github.com/n-deleforge/littleJS/network)
[![GitHub stars](https://img.shields.io/github/stars/n-deleforge/littleJS?style=for-the-badge)](https://github.com/n-deleforge/littleJS/stargazers)
![GitHub file size in bytes](https://img.shields.io/github/size/n-deleforge/littleJS/littleJS.min.js?style=for-the-badge)

</div>

# Overview

When I started to learn Javascript, I realised that I was often using the same functions and then I thought it would a good exercice to create a kind of simple library for my personnal use, instead of using any other popular alternatives like **jQuery**.

# Features

Some examples of functions from **littleJS**.

- `get` : select an element.
- `rand` : return a random number.
- `ucFirst` : add a majuscule to a string.
- `getStorage` : get a local storage.
- `setCookie` : set a cookie.
- `wait` : return a promise which is resolved after a timeout given
- `getVariableCSS` : get the value of a CSS variable.
- `downloadImage`: download a picture from an URL.

To see all the functions, their uses and their utilities, you can read the [complete manual](/docs/manual.md).

# Quick start
Download the file `littleJS.min.js`, add it to your project and include it in your page like any Javascript files.

# Changelog
 
 - 0.3.5 : new function with `wait`.
 - 0.3.4 : new function with `navigate`.
 - 0.3.3 : new functions with `randomName` and `downloadImage`.
 - 0.3.2 :  a few changes, multiples functions for local storage and cookies (get, set, rem).
 - 0.3.1 : actually, I decided to remove all the debug part cos I want to keep it light. The problem of the cookie function has been corrected thank to [NamedRoger](https://github.com/NamedRoger). I didn't choose his method but it seems to work well too.
 - 0.3 : documentation added for each functions, a lot more debug info
 - 0.2 : new functions with `cookie` and `getVariableCSS` 
 - 0.1 : Initial release
