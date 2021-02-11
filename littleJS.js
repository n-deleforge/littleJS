// => Version : 0.3
// => Last update : 09/02/2021

const _LIBRARY_TITLE = "Little JS";
const _DEBUG_MODE = document.currentScript.src.split("?")[1] == "debug" ? true : false;

// =================================================
// =================================================
// ============ GENERIC

/**
 *  Easy, pratical and quick element selector
 * @param {string} name  key character ("#"  for an ID element, "."   for a list of class or "~" for tag) + name of the element to select
 * @return HTMLelement (querySelector)
 **/

function get(name) {
    let subTitle =  _LIBRARY_TITLE + " (" + get.name + ") : ";
    let error = subTitle + "the `"+ name + "` element doesn't exist.";

    // ID element
    if (name.search("#") == 0 && name.split("#")[1] != null) {
        if (document.querySelector(name) != null) 
            return document.querySelector(name);
        else 
            if (_DEBUG_MODE) throw (error);
    }
    
    // Class element
    if (name.search(".") == 0 && name.split(".")[1] != null) {
        if (document.querySelectorAll(name).length != 0)
            return document.querySelectorAll(name);
        else 
            if (_DEBUG_MODE) throw (error);
    }

    // Tag element
    if (name.search("~") == 0 && name.split("~")[1] != null) {
        if (document.querySelectorAll(name.split("~")[1])[0] != null)
            return document.querySelectorAll(name.split("~")[1])[0];
        else 
            if (_DEBUG_MODE) throw (error);
    }

    if (_DEBUG_MODE) throw (subTitle + "must be used with a keycode as `#`, `.` or `~`.");
}

/**
 *  Return a random number between x and y
 * @param {int} min     the lowest number
 * @param {int} max    the biggest number
 * @return random value
 **/

function rand(min, max) {
    let subTitle =  _LIBRARY_TITLE + " (" + rand.name + ") : ";

    if (typeof min == 'number' && typeof max == 'number') {
        if (min < max)
            return (Math.floor(Math.random() * (max - min) + min));
        else
            if (_DEBUG_MODE) throw (subTitle + "MIN must be smaller than MAX");
    }
    else
        if (_DEBUG_MODE) throw (subTitle + "must be used with two numbers.");
}

/**
 *  Return capitalized string
 * @param {string} s string to be capitalized
 * @return capitalized string
 **/

function ucFirst(s) {
    let subTitle =  _LIBRARY_TITLE + " (" + ucFirst.name + ") : ";

    if (typeof s == "string" && s != "")
        return s.charAt(0).toUpperCase() + s.slice(1);
    else
        if (_DEBUG_MODE) throw(subTitle + "needs a valide string as argument.");
}

/**
 *  Return singular or plural according the quantity given
 * @param {int} nb the quantity
 * @param {string} str1 the singular
 * @param {string} str2 the plural
 * @return singular or plural
 **/

function plural(nb, str1, str2) {
    let subTitle =  _LIBRARY_TITLE + " (" + plural.name + ") : ";

    if (typeof nb == "number" && typeof str1 == "string" && typeof str2 == "string") {
        if (nb > -1)
            return nb < 2 ? str1 : str2; 
        else
            if (_DEBUG_MODE) throw(subTitle + "the quantity can't be negative or equal to 0.")
    }
    else 
        if (_DEBUG_MODE) throw(subTitle + "needs three arguments : the first argument must be a number and the next two arguments must be a string.");
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
    let subTitle = _LIBRARY_TITLE + " (" + storage.name + ") : ";
    let error = subTitle + "the local storage named `" + name + "` doesn't exist";

    // getItem
    if (action == "get" && name) {
        if(localStorage.getItem(name))
            return localStorage.getItem(name);
        else
            if (_DEBUG_MODE) throw (error);
    }

    // setItem
    if (action == "set"&& name && value != null)  
        return localStorage.setItem(name, value);

    // removeItem
    if (action == "rem" && name) {
        if(localStorage.getItem(name))
            return localStorage.removeItem(name);
        else
            if (_DEBUG_MODE) throw (error);
    }

    if (_DEBUG_MODE) throw (subTitle + "needs at least two arguments, or three with the set action.");
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
    let subTitle =  _LIBRARY_TITLE + " (" + cookie.name + ") : ";
    let error = subTitle + "the cookie named `" + name + "` doesn't exist";

    // Read a cookie
    if (action == "read") {
        if (typeof name == "string") {
            let cookiesList = document.cookie.split('; ');
            for (let i = 0; i < cookiesList.length; i++) {
                if (cookiesList[i].split("=")[0] == name) 
                    return cookiesList[i].split("=")[1];
            }
            if (_DEBUG_MODE) throw(error); 
        }
        else
            if (_DEBUG_MODE) throw(subTitle + "the read action needs a string as argument.")
    }

    // Create a cookie
    if (action == "create") {
        if (typeof name == "string" && value) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            let expires = "Expires=" + date.toGMTString();
            return document.cookie = name + "=" + value + "; " + expires + "; Path=/; SameSite=Strict; Secure";
        }
        else 
            if (_DEBUG_MODE) throw(subTitle + "the create action needs at lest two arguments (name, value).");
    }

    // Delete a cookie
    if (action == "delete") {
        if (typeof name == "string") {
            if (cookie("read", name))
                return document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/; SameSite=Strict; Secure";
            else 
                if (_DEBUG_MODE) throw(error);
        }
        else 
            if (_DEBUG_MODE) throw(subTitle + "the delete action needs a string as argument.")
    }

    if (_DEBUG_MODE) throw (subTitle + "needs at least two arguments, or four with the create action.");
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
    let subTitle =  _LIBRARY_TITLE + " (" + getVariableCSS.name + ") : ";

    if (typeof name == "string") {
        if (getComputedStyle(document.documentElement).getPropertyValue("--" + name) != "")
            return getComputedStyle(document.documentElement).getPropertyValue("--" + name);
        else 
            if (_DEBUG_MODE) throw(subTitle + "the " + name + " CSS variable does't exist"); 
    }
    else 
        if (_DEBUG_MODE)throw(subTitle + "needs a string as argument."); 
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
    let subTitle =  _LIBRARY_TITLE + " (" + download.name + ") : ";

    if (typeof content == "string" && typeof name == "string") {
        let file = new Blob([content], { type: 'text/plain' });
        let dl = document.createElement('a');
    
        dl.download = name;
        dl.href = window.URL.createObjectURL(file);
        dl.click();
    }
    else 
        if (_DEBUG_MODE) throw (subTitle + "needs at two strings as arguments.")
}