// => Version : 0.2
// => Last update : 11/01/2021

// =================================================
// =================================================
// ============ GENERIC

// ===> Easy selector
// "#"  for an ID element
// "."   for several class
// "~" for special element as header, footer etc.

function get(n) {
    if (n.search("#") == 0 && n.split("#")[1] != null && document.querySelector(n) != null) 
        return document.querySelector(n);
    if (n.search(".") == 0 && n.split(".")[1] != null && document.querySelectorAll(n) != null) 
        return document.querySelectorAll(n);
    if (n.search("~") == 0 && n.split("~")[1] != null && document.querySelectorAll(n.split("~")[1]) != null)
        return document.querySelectorAll(n.split("~")[1])[0];
}

// ===> Give a random number
// min : minimum
// max : maximum

function rand(min, max) {
    return (Math.floor(Math.random() * Math.floor(max))) + min;
}

// ===> First-letter majuscule

function ucFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// ===> Display singular or plural
// nb : quantity  
// singular : the word when it's singular
// plural : the word when it's plural

function plural(nb, singular, plural) {
    if (nb > 1) 
        return plural;
    return singular;
} 

// =================================================
// =================================================
// ============ STORAGE

// ===> Simplier usage of the local storage
// action : get, set or rem
// name :  name of the value
// value : content of the value

function storage(action, name, value) {
    if (action == "get") 
        return localStorage.getItem(name);
    if (action == "set") 
        return localStorage.setItem(name, value);
    if (action == "rem") 
        return localStorage.removeItem(name);
}

// ===> Another way to use cookies
// action : create, read or delete
// name : name of the value
// value : content of the value
// days : numbers of days till it expires

function cookie(action, name, value, days) {
    if (action == "create") {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toGMTString();
        document.cookie = name + "=" + value + "; " + expires + "; Path=/ ; SameSite=Strict; Secure";
    }

    if (action == "read") {
        let list = document.cookie.split('; ');

        for (let i = 0; i < list.length; i++) {
            let cookie = list[i].split("=");
            if (cookie[0] == name) 
                return cookie[1];
        }
    
        return null;
    }

    if (action == "delete") {
        cookie("create", name, "", -1);
    }
}

// =================================================
// =================================================
// ============ CSS TO JS

// ===> Get the value of a CSS variable

function getVariableCSS(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name)
}

// =================================================
// =================================================
// ============ OTHERS

// ===> Create a download
// content : content of the file
// name : name of the file

function download(content, name) {
    let file = new Blob([content], { type: 'text/plain' });
    let dl = document.createElement('a');

    dl.download = name;
    dl.href = window.URL.createObjectURL(file);
    dl.click();
}