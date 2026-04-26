/*
===========================================
DIGITAL GLOSSARY PROJECT - JAVASCRIPT FILE
===========================================

HOW TO RUN THIS PROJECT:

1. Download or create folder
2. Put index.html, style.css, script.js inside it
3. Open index.html in browser (double click)
4. Start typing in search box → table will filter

No installation required 🚀
===========================================
*/

// Step 1: Get search input element
let searchBox = document.getElementById("searchBox");

// Step 2: Add event listener (runs when user types)
searchBox.addEventListener("keyup", function () {

    // Step 3: Get input value and convert to lowercase
    let filter = searchBox.value.toLowerCase();

    // Step 4: Get all table rows
    let rows = document.querySelectorAll("#tagTable tbody tr");

    // Step 5: Loop through all rows
    rows.forEach(function (row) {

        // Get text content of row
        let text = row.textContent.toLowerCase();

        // Step 6: Check if text includes search value
        if (text.includes(filter)) {
            row.style.display = "";   // show row
        } else {
            row.style.display = "none"; // hide row
        }
    });

});