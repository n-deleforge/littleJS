// =============================
// ===> Easy selector
// "#"  for an ID element
// "."   for several class
// "~"  for special element as header, footer etc.

function get(n) {
    if (n.search("#") == 0 && n.split("#")[1] != null && document.querySelector(n) != null) return document.querySelector(n);
    if (n.search(".") == 0 && n.split(".")[1] != null && document.querySelectorAll(n) != null) return document.querySelectorAll(n);
    if (n.search("~") == 0 && n.split("~")[1] != null && document.querySelectorAll(n.split("~")[1]) != null) return document.querySelectorAll(n.split("~")[1])[0];
}

// =============================
// ===> Simplier usage of the local storage
// n : name of the content
// v : value of the content

function storage(a, n, v) {
    if (a == "get") return localStorage.getItem(n);
    if (a == "set") return localStorage.setItem(n, v);
    if (a == "rem") return localStorage.removeItem(n);
}

// =============================
// ===> Add a a majuscule

function ucFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// =============================
// ===> Create a download
// c : content of the file
// n : name of the file

function download(c, n) {
    let file = new Blob([c], { type: 'text/plain' });
    let dl = document.createElement('a');
    dl.download = n;
    dl.href = window.URL.createObjectURL(file);
    dl.click();
}

// =============================
// ===> Give a random number
// min : minimum
// max : maximum

function nbRandom(min, max) {
    return (Math.floor(Math.random() * Math.floor(max))) + min;
}
