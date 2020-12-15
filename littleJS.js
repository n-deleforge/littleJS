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
// action : type of action
// name : name of the content
// value : value of the content
function storage(action, name, value) {
    if (action == "get") 
        return localStorage.getItem(name);
    if (action == "set") 
        return localStorage.setItem(name, value);
    if (action == "rem") 
        return localStorage.removeItem(name);
}

// ===> Create a cookie
// name : name of the cookie
// value : value of the cookie
// days : numbers of days
function createCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toGMTString();
    document.cookie = name + "=" + value + "; " + expires + "; Path=/ ; SameSite=Strict; Secure";
}

// ===> Read a cookie
// name : name of the cookie
function readCookie(name) {
    let list = document.cookie.split('; ');

    for (let i = 0; i < list.length; i++) {
        let cookie = list[i].split("=");
        if (cookie[0] == name) 
            return cookie[1];
    }

    return null;
}

// ===> Delete a cookie
// name : name of the cookie
function deleteCookie(name) {
    createCookie(name, "", -1);
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