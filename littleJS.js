/*

    Version : 0.3.6
    Last update : 21/03/2022
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
    if (element.search("#") == 0 && element.split("#")[1] != null) {
        if (document.querySelector(element) != null) {
            return document.querySelector(element);
        }
    }
    
    // Class element
    if (element.search(".") == 0 && element.split(".")[1] != null) {
        if (document.querySelectorAll(element).length != 0) {
            return document.querySelectorAll(element);
        }
    }

    // Tag element
    if (element.search("~") == 0 && element.split("~")[1] != null) {
        if (document.querySelectorAll(element.split("~")[1])[0] != null) { 
            return document.querySelectorAll(element.split("~")[1])[0];
        }
    }
}

// =================================================
// ============ GENERIC

/**
 *  Return a random number between min and max
 * @param {int} min    minimal number
 * @param {int} max   maximal number
 * @return integer
 **/

function rand(min, max) {
    if (min < max) {
        return (Math.floor(Math.random() * max) + min);
    }
}

/**
 *  Return a random value (not used for secure things)
 * @param {int} length length of the random value - by default : 15
 * @return string
 **/

function randomValue(randomLength = 15) {
    let random;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let index = 0; index < randomLength; index++) {
        if (index === 0) {
            random = characters.charAt(Math.floor(Math.random() * characters.length))
        }
        else {
            random += characters.charAt(Math.floor(Math.random() * characters.length))
        }
    };

    return random;
} 

/**
 *  Return capitalized string
 * @param {string} string   string to be capitalized
 * @return capitalized string
 **/

function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *  Return singular or plural according the quantity given
 * @param {int} quantity        quantity of an item or anything
 * @param {string} singular   value of the singular
 * @param {string} plural       value of the plural
 * @return singular or plural
 **/

function plural(quantity, singular, plural) {
    if (quantity > -1) {
        if (quantity < 2) {
            return singular;
        }
        else {
            return plural;
        }
    }
}

// =================================================
// =================================================
// ============ LOCAL STORAGE

/**
 *  Get a local storage
 * @param {string} name name of the local storage
 * @return value of the local storage
 **/

function getStorage(name) {
    if (name && localStorage.getItem(name)) {
        return localStorage.getItem(name);
    }
}

/**
 *  Set a local storage
 * @param {string} name name of the local storage
 * @param {string} value value of the local storage
 **/

function setStorage(name, value) {
    if (name && value) {
        localStorage.setItem(name, value);
    }
}

/**
 *  Remove a local storage
 * @param {string} name name of the local storage
 **/

function remStorage(name) {
    if (name && localStorage.getItem(name)) {
        localStorage.removeItem(name);
    }
}

// =================================================
// =================================================
// ============ COOKIES

/**
 *  Read a cookie
 * @param {string} name name of the cookie
 * @return the value of the cookie
 **/

function getCookie(name) {
    let cookieValue;
    const cookiesList = document.cookie.split('; ');

    cookiesList.forEach(cookie => {
        if (cookie.split("=")[0] == name) {
            const value = cookie.split("=")[1];

            if (value == "true") {
                cookieValue = true;
            }
            else if (value == "false") {
                cookieValue = false;
            }
            else {
                cookieValue = value;
            }
        }
    });

    return cookieValue;
}

/**
 *  Set a cookie
 * @param {string} name    name of the cookie
 * @param {string} value    value of the cookie
 * @param {int} lifetime      lifetime of the cookie (in days) - by default : 365
 * @param {bool} local       true for localhost - by default : false
 * @return void
 **/

function setCookie (name, value, lifetime = 365, local = false) {
    // Define datetime
    let date = new Date();
    date.setTime(date.getTime() + (lifetime * 24 * 60 * 60 * 1000));

    // Define expires
    const expires = "Expires=" + date.toGMTString();

    // Create cookie
    if (local) {
        document.cookie = name + "=" + value + "; " + expires;
    }
    else {
        document.cookie = name + "=" + value + "; " + expires + "; Path=/; SameSite=Strict; Secure"
    }
}

/**
 *  Remove a cookie
 * @param {string} name name of the cookie
 * @param {bool} local     true for localhost - by default : false
 **/

function remCookie (name, local = false) {
    if (getCookie(name)) {
        if (local) {
            document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        }
        else {
            document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/; SameSite=Strict; Secure"
        }
    }
}

// =================================================
// ============ CSS TO JS

/**
 *  Return the value of the CSS variable given
 * @param {string} name name of the CSS variable
 * @return value of the CSS variable
 **/

function getVariableCSS(name) {
    const variableCSS = getComputedStyle(document.documentElement).getPropertyValue("--" + name);

    if (variableCSS !== "") {
        return variableCSS;
    }
}

// =================================================
// ============ PROMISE

/**
 * Create a promise and resolve it when the timeout is over
 * @param {int} timeout number of seconds
 * @return resolve
 **/

function wait(timeout) {
     // Return a promise
    return new Promise(resolve => {

        // Resolve the promise after the timeout
        setTimeout(() => { 
            resolve() 
        }, timeout);
    });
};

// =================================================
// ============ UNCATEGORIZED

/**
 *  Create full plain text blob and make it downloadable
 * @param {string} content  content of the file
 * @param {string} name     name of the file
 **/

function download(content, name) {
    // Create a text plain file and an hyperlink element
    const file = new Blob([content], { type: 'text/plain' });
    const download = document.createElement('a');

    // Setup name and make the user download the text plain file
    download.download = name;
    download.href = window.URL.createObjectURL(file);
    download.click();
}

/**
 *  Create a picture blob and make it downloadable
 * @param {string} url url of the image to fetch
 **/

async function downloadImage(url) {
    // Fetch the image and create an hyperlink element
    const image = await fetch(url);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    const download = document.createElement('a');
    
    // Setup name, URL and make the user download the image
    download.download = randomValue();
    download.href = imageURL;
    download.click();
}

/**
 *  Create an hyperlink and redirect the user
 * @param {string} url          url for the redirection
 * @param {bool} newTab    false to redirect to the current tab - by default : true
 **/

 function navigate(url, newTab = true) {
     // Create an hyperlink element
    const a = document.createElement('a');
    a.href = url;

    // Set the new tab attribute
    if (newTab) {
        a.setAttribute('target', '_blank');
    }

    // Redirection
    a.click();
 }

 // =================================================
// ============ DEBUGGING

 /**
 *  Dump your data directly on the top of the page
 * @param {string} data     what you need to display
 * @param {string} theme  dark or light - by default : dark
 **/

function dump(data, theme = "dark") {
    // Create the style
    const dumpStyle = document.createElement('style');
    dumpStyle.innerHTML = `
    .dump {
        font-family: Monospace !important;
        font-size: 1em;
        padding: 1vh 2vw;
    }
    .dumpHead {
        font-weight: bolder;
        color: lightcoral;
        font-size: 1.5em;
        margin-bottom: 0.5vw;
        text-transform: capitalize;
    }
    .dumpLight {
        background-color: lightgrey;
        color: black;
    }
    .dumpDark {
        background-color : black;
        color: white;
    }`;

    // Create the element and add the style
    const element = document.createElement("div");
    const style = (theme == "dark") ? "dumpDark" : "dumpLight"; 
    element.classList.add("dump");
    element.classList.add(style);

    // Determine the data
    let type = typeof data;
    switch (type) {
        case "undefined" :
        case "null" :
            element.innerHTML =  "<span class='dumpHead'>Error</span><br />This function cannot display undefined or null data.";
            break;
        
        case  "object" :
            // Array
            if (Array.isArray(data)) {
                element.innerHTML = "<span class='dumpHead'>Array</span><br />";
                data.forEach(line => {
                    element.innerHTML += line + "<br />";
                });
            }
            // Object
            else {
                element.innerHTML = "<span class='dumpHead'>Object</span><br />";
                Object.keys(data).forEach(key => {
                    if (typeof data[key] === "object" && data[key] !== null) {
                        element.innerHTML = "<span class='dumpHead'>Error</span><br />This function cannot display object of multiples objects."
                    }
                    else {
                        element.innerHTML += key + " : " + data[key] + "<br />";
                    }
                })
            }
            break;
        
        // String, bool, int etc.
        default:
            element.innerHTML = "<span class='dumpHead'>" + type + "</span><br />" + data;
    }
    
    // Add the dump style and then the dump element
    get("~header").appendChild(dumpStyle);
    document.body.insertBefore(element, get("~body").childNodes[0]);
}