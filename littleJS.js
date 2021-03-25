// => Version : 0.3.1
// => Last update : 25/03/2021

// =================================================
// =================================================
// ============ GENERIC

/**
 *  Easy, pratical and quick element selector
 * @param {string} element  key character ("#"  for an ID element, "."   for a list of class or "~" for tag) + name of the element to select
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

/**
 *  Return a random number between x and y
 * @param {int} min     the lowest number
 * @param {int} max    the biggest number
 * @return random value
 **/

function rand(min, max) {
    if (min < max) return (Math.floor(Math.random() * (max - min) + min));
}

/**
 *  Return capitalized string
 * @param {string} s string to be capitalized
 * @return capitalized string
 **/

function ucFirst(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 *  Return singular or plural according the quantity given
 * @param {int} nb the quantity
 * @param {string} str1 the singular
 * @param {string} str2 the plural
 * @return singular or plural
 **/

function plural(nb, str1, str2) {
    if (nb > -1) return nb < 2 ? str1 : str2;
}

// =================================================
// =================================================
// ============ STORAGE

/**
 *  Get, set or remove a local storage
 * @param {string} action "get" to get a local storage, "set" to create/modify a local storage or "remove" to delete a local storage
 * @param {string} name name of the local storage
 * @param {string} value value of the local storage (only for the "set" action)
 * @return void
 **/

function storage(action, name, value = null) {
    // getItem
    if (action == "get" && name)
        if(localStorage.getItem(name)) return localStorage.getItem(name);

    // setItem
    if (action == "set"&& name && value != null)  return localStorage.setItem(name, value);

    // removeItem
    if (action == "rem" && name)
        if(localStorage.getItem(name)) return localStorage.removeItem(name);
}

/**
 *  Read, create or delete a cookie
 * @param {string} action "read" for reading a cookie, "create" to create/modify a cookie or "delete" to delete a cookie
 * @param {string} name name of the cookie
 * @param {string} value value of the cookie (only for the "create" action)
 * @param {string} days number of days of the cookie (only for the "create" action, by default : one year)
 * @return void
 **/

function cookie(action, name, value = null, days = 365) {
    // Get a cookie
    if (action == "get") {
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

    // Set a cookie
    if (action == "set") {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "Expires=" + date.toGMTString();
        // return document.cookie = name + "=" + value + "; " + expires + "; Path=/; SameSite=Strict; Secure";
        return document.cookie = name + "=" + value + "; " + expires;
    }

    // Remove a cookie
    if (action == "rem") {
        if (cookie("get", name))
            return document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/; SameSite=Strict; Secure";
    }
}

// =================================================
// =================================================
// ============ CSS TO JS

/**
 *  Return the value of the CSS variable given
 * @param {string} name the name of the CSS variable
 * @return the value of the CSS variable
 **/

function getVariableCSS(name) {
    if (getComputedStyle(document.documentElement).getPropertyValue("--" + name) != "")
         return getComputedStyle(document.documentElement).getPropertyValue("--" + name);
}

// =================================================
// =================================================
// ============ UNCATEGORIZED

/**
 *  Create a blob and make it downloadable
 * @param {string} content the content of the file
 * @param {string} name the name of the file
 * @return void
 **/

function download(content, name) {
    const file = new Blob([content], { type: 'text/plain' });
    const dl = document.createElement('a');

    dl.download = name;
    dl.href = window.URL.createObjectURL(file);
    dl.click();
}