/*
=========================================
HOW TO RUN:
1. Put all files in same folder
2. Open index.html
3. Click "Services" → dropdown will open
=========================================
*/


// Get elements
let btn = document.getElementById("dropBtn");
let menu = document.getElementById("dropdownMenu");


// Toggle dropdown
btn.onclick = function () {

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

};


// Close when clicking outside
document.onclick = function (e) {

    if (e.target !== btn) {
        menu.style.display = "none";
    }

};