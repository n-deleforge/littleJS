![Header](https://raw.githubusercontent.com/n-deleforge/littleJS/main/docs/header.png)

The document is not complete yet.

# Table of content
- [DOM](#dom)
- [Generic](#generic)
- [Local storage](#local-storage)
- [Cookies](#cookies)
- [Promise](#promise)
- [CSS to JS](#css-to-js)
- [Uncategorized](#uncategorized)

# DOM functions

## get
This function is used to select any element. 

To use this function, you need to add a **key** as argument :
- `#` select an ID
- `.` select a list of class
- `~` select a tag like header or footer

Examples :
- `get("#container")` select the element id named "container".
- `get(".section")` : select every classes named "section".
- `get("~body")` : select the body tag of the page

# Generic functions

## rand
This function returns a random value between two values. It needs two arguments : a minimum and a maximum. Of course, the minimum must be inferior the maximum.

Examples :
- `rand(0,1)` : return either 0, either 1.
- `rand(39,149)` : return a value between 39 and 149.

## randomValue
This function returns a random value of characters. By default, it return 15 characters but you can add a number as argument to return X characters. Obvisouly, it should not be used for secure usages.  
Characters possibles : `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.

Examples :
- `randomValue()` : return 15 random characters.
- `randomValue(5)` : return 5 random characters.

## ucFirst
This function adds a majuscule to a string given as argument.

Example : 
- `ucFirst("firstname)` : return "Firstname".
- `ucFirst("Lastname)` : return "Lastname".

## plural
This function allows to write a word in its singular or plural form according to a number given. It needs three argument : the number, the singular form and the plural form.

Example : 
- `plural(1, "house", "houses)` : return "house".
- `plural(7, "trial", "trials")` : return "trials".

# Local storage

## getStorage
## setStorage
## remStorage


# Cookies

## getCookie
## setCookie
## remCookie


# Promise

## wait


# CSS to JS

## getVariableCSS


# Uncategorized

## download
## downloadImage
## navigate