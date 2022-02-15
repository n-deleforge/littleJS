/*

    Version : 0.3.5
    Last update : 15/02/2022
    See changelog here : https://github.com/n-deleforge/littlejs/
    
*/

// =================================================
// ============ DOM

/**
 *  Easy, pratical and quick element selector
 * @param {string} element
 * @return HTMLelement (querySelector)
 **/

function get(element) {
    // ID element
    if (element.search("#") == 0 && element.split("#")[1] != null)
        if (document.querySelector(element) != null) return document.querySelector(element);
    
    // Class element
    if (element.search(".") == 0 && element.split(".")[1] != null)
        if (document.querySelectorAll(element).length != 0) return document.querySelectorAll(element);

    // Tag element
    if (element.search("~") == 0 && element.split("~")[1] != null)
        if (document.querySelectorAll(element.split("~")[1])[0] != null) return document.querySelectorAll(element.split("~")[1])[0];
}

// =================================================
// ============ GENERIC

/**
 *  Return a random number between min and max
 * @param {int} min
 * @param {int} max
 * @return string
 **/

function rand(min, max) {
    if (min < max) return (Math.floor(Math.random() * max) + min);
}

/**
 *  Return a random value (not used for secure things)
 * @param {int} length
 * @return string
 **/

function randomValue(randomLength = 15) {
    let name;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let i = 0; i < randomLength; i++) {
        (i == 0) ? name = characters.charAt(Math.floor(Math.random() * characters.length)) : name += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return name;
} 

/**
 *  Return capitalized string
 * @param {string} str
 * @return string
 **/

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 *  Return singular or plural according the quantity given
 * @param {int} quantity
 * @param {string} singular
 * @param {string} plural
 * @return string
 **/

function plural(quantity, singular, plural) {
    if (quantity > -1) return quantity < 2 ? singular : plural;
}

// =================================================
// =================================================
// ============ LOCAL STORAGE

/**
 *  Get a local storage
 * @param {string} name
 * @return void
 **/

function getStorage(name) {
    if (name && localStorage.getItem(name)) return localStorage.getItem(name);
}

/**
 *  Set a local storage
 * @param {string} name
 * @param {string} value
 * @return void
 **/

function setStorage(name, value) {
    if (name && value) localStorage.setItem(name, value);
}

/**
 *  Remove a local storage
 * @param {string} name
 * @return void
 **/

function remStorage(name) {
    if (name && localStorage.getItem(name)) localStorage.removeItem(name);
}

// =================================================
// =================================================
// ============ COOKIES

/**
 *  Read a cookie
 * @param {string} name
 * @return void
 **/

function getCookie(name) {
    const cookiesList = document.cookie.split('; ');

    for (let i = 0; i < cookiesList.length; i++) {
        if (cookiesList[i].split("=")[0] == name) {
            let cookieChecked = cookiesList[i].split("=")[1];

            if (cookieChecked == "true") return true;
            else if (cookieChecked == "false") return false;
            else return cookieChecked;
        }
    }
}

/**
 *  Set a cookie
 * @param {string} name
 * @param {string} value
 * @param {int} lifetime
 * @param {bool} local
 * @return void
 **/

function setCookie (name, value, lifetime = 365, local = false) {
    let date = new Date();
    date.setTime(date.getTime() + (lifetime * 24 * 60 * 60 * 1000));
    const expires = "Expires=" + date.toGMTString();

    document.cookie = (local == false) ? name + "=" + value + "; " + expires + "; Path=/; SameSite=Strict; Secure" : name + "=" + value + "; " + expires;
}

/**
 *  Remove a cookie
 * @param {string} name
 * @param {bool} local
 * @return void
 **/

function remCookie (name, local = false) {
    if (getCookie(name)) 
        document.cookie = (local == false) ?  name + "=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/; SameSite=Strict; Secure" : name + "=; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}


// =================================================
// ============ CSS TO JS

/**
 *  Return the value of the CSS variable given
 * @param {string} name
 * @return string
 **/

function getVariableCSS(name) {
    if (getComputedStyle(document.documentElement).getPropertyValue("--" + name) != "")
        return getComputedStyle(document.documentElement).getPropertyValue("--" + name);
}

// =================================================
// ============ PROMISE

/**
 * Create a promise and resolve it when the timeout is over
 * @param {int} timeout
 * @return resolve
 **/

 function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, timeout);
    });
};

// =================================================
// ============ UNCATEGORIZED

/**
 *  Create full plain text blob and make it downloadable
 * @param {string} content
 * @param {string} name
 * @return void
 **/

function download(content, name) {
    const file = new Blob([content], { type: 'text/plain' });
    const dl = document.createElement('a');

    dl.download = name;
    dl.href = window.URL.createObjectURL(file);
    dl.click();
}

/**
 *  Create a picture blob and make it downloadable
 * @param {string} url
 * @return void
 **/

async function downloadImage(url) {
    const image = await fetch(url);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    const dl = document.createElement('a');
    
    dl.download = randomValue();
    dl.href = imageURL;
    dl.click();
}

/**
 *  Create an hyperlink and redirect the user
 * @param {string} url
 * @param {bool} newTab
 * @return void
 **/

 function navigate(url, newTab = true) {
    const a = document.createElement('a');
    a.href = url;
    if (newTab) a.setAttribute('target', '_blank');
    a.click();
 }