![Header](https://raw.githubusercontent.com/n-deleforge/littleJS/main/docs/header.png)

# Manual

## Table of content
- [DOM](##dom)
- [Generic](##generic)
- [Local storage](##local-storage)
- [Cookies](##cookies)
- [Promise](##promise)
- [CSS to JS](##css-to-js)
- [Uncategorized](##uncategorized)

## DOM functions

### get
This function selects an element. It needs the name of the element and a **key** as argument.
- `#` select an ID
- `.` select a list of class
- `~` select a tag like header or footer

Examples :
- `get("#container")` select the element id named `container`.
- `get(".section")` : select every classes named `section`.
- `get("~body")` : select the **body tag** of the page

## Generic functions

### rand
This function returns a random value between two values. It needs two arguments : a minimum and a maximum.

Examples :
- `rand(0,1)` : return either 0, either 1.
- `rand(39,149)` : return a value between 39 and 149.

### randomValue
This function returns a random value of characters. By default, it return 15 characters but you can select the number of characters as argument.
Characters possibles : `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.

Examples :
- `randomValue()` : return **15** random characters.
- `randomValue(5)` : return **5** random characters.

### ucFirst
This function adds a majuscule to a string. It needs the string as argument.

Example : 
- `ucFirst("first name)` : return `First name`.

### plural
This function allows to write a word in its singular or plural form according to a number given. It needs three argument : the number, the singular form and the plural form.

Example : 
- `plural(1, "house", "houses")` : return `house`.
- `plural(7, "trial", "trials")` : return `trials`.

## Local storage

### getStorage
This function returns the value of the local storage. It needs the key as argument.

Example : 
- `getStorage("Hello")` : return `world`.
- `getStorage("mySuperArray")` : return `["apple", "banana", "strawberry"]`.

### setStorage
This function creates a local storage. It needs two argument : the key and the value.

Example : 
- `setStorage("Hello", "world")` : it will create a local storage with the key `Hello` and the value `world`.
- `setStorage("mySuperArray", "["apple", "banana", "strawberry"]")` : it will create a local storage with the key `mySuperArray` and the value `["apple", "banana", "strawberry"]`.

### remStorage
This function deletes a local storage. It needs the key as argument.

Example : 
- `remStorage("Hello")` : delete the local storage with the key "Hello".

## Cookies

### getCookie
This function returns the value of the cookie. It needs the key as argument.

Example : 
- `getCookie("Hello")` : return `world`.
- `getCookie("anotherSuperArray")` : return `["pineapple", "orange", "pear"]`.

### setCookie
This function creates a cookie. It needs three arguments : the key, the value, the lifetime (by default : 365 days). If the cookie is used for localhost, it needs one more argument. 

Example : 
- `setCookie("Hello", "world")` : create a 365 days cookie with the key `Hello` and the value `world` 
- `setCookie("anotherSuperArray", "["pineapple", "orange", "pear"]", 3, true)` : create a 3 days cookie (for localhost) with the key `anotherSuperArray` and the value `["pineapple", "orange", "pear"]` 

### remCookie
This function deletes a cookie. It needs the key as argument. If the cookie is used for localhost, it needs one more argument. 

Example : 
- `remCookie("Hello")` : delete the cookie with the key `Hello`.
- `remCookie("anotherSuperArray", true)` : delete the cookie (for localhost) with the key `anotherSuperArray`.

## Promise

### wait
This function create a promise which is resolved when a timeout is done. It needs the timeout as argument.

Example :
- `wait(700).then(() => { ...` : create a promise which is resolved after 700ms.

## CSS to JS

### getVariableCSS
This function returns the value of a CSS variable. It needs the variable name as argument.

Exmaple :
- `getVariableCSS("color-accent")` : returns the value of `--color-accent` CSS variable.

## Uncategorized

### download
This function creates a full plain text blob and make it downloadable. It needs two argument : the name of the file and the content.

Example :
- `download("Hello world", "file.txt")` : create a blob file named `file.txt` with the content `Hello world`.

### downloadImage
This function creates a picture blob from an URL and make it downloadable. It needs the URL source as argument.

Example :
- `downloadImage("https://mywebsite.com/images/header.png")` : create a blob image from `https://mywebsite.com/images/header.png`.

### navigate
This function creates an hyperlink and redirect the user. It needs the URL as argument. By default, it creates a new tab but it can be turned off.

Exmaple :
- `navgiate("https://mywebsite.com")` : redirect the user to `https://mywebsite.com` into a new tab.
- `navgiate("htts://myotherwebsite.com", false)` : redirect the user to `htts://myotherwebsite.com` into the current tab.