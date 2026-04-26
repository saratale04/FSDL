/*
========================================================
THEME SWITCHER - JAVASCRIPT FILE
========================================================

📌 HOW TO RUN:

1. Create folder → theme-switcher
2. Add files:
   - index.html
   - style.css
   - script.js

3. Open index.html in browser

4. Click button → theme changes
5. Refresh page → theme remains SAME (saved)

========================================================

📌 LOGIC:

- Button click toggles theme
- We add/remove "dark" class from body
- Save theme in localStorage
- Load saved theme on page load

========================================================
*/


// Step 1: Get button
let btn = document.getElementById("themeBtn");


// Step 2: Check saved theme from localStorage
let savedTheme = localStorage.getItem("theme");

// If saved theme is dark → apply it
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}


// Step 3: Add click event
btn.addEventListener("click", function () {

    // Toggle dark class
    document.body.classList.toggle("dark");

    // Check current theme and save it
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});