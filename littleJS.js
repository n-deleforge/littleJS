
// =============================
// ===== Select an element
// "#"  for an ID
// "~"  for a selector
// "."   for a class

function get(n) {
    if (n.search("#") != -1 && document.getElementById(n.split("#")[1]) != null) { return document.getElementById(n.split("#")[1]); }
    if (n.search("~") != -1 && document.querySelectorAll(n.split('~')[1]) != null) { return document.querySelectorAll(n.split('~')[1]); }
    if (n.search("\\.") != -1 && document.querySelectorAll(n).length != 0) { return document.querySelectorAll(n); }
}

// =============================
// ===== Usage of local storage
// n : name, v : value

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

