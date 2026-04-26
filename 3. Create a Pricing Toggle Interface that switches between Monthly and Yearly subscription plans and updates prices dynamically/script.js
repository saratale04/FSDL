/*
========================================================
PRICING TOGGLE INTERFACE - JAVASCRIPT FILE
========================================================

📌 HOW TO RUN:

1. Create a folder (pricing-toggle)
2. Inside it create 3 files:
      - index.html
      - style.css
      - script.js

3. Copy code into respective files

4. Open index.html in browser

5. Click toggle switch
   → Prices will change between Monthly and Yearly

========================================================

📌 LOGIC EXPLANATION:

- We use a checkbox as toggle switch
- When checkbox is checked → Yearly pricing
- When unchecked → Monthly pricing
- JavaScript updates text dynamically using DOM

========================================================
*/


// Step 1: Get toggle switch element using ID
let toggle = document.getElementById("toggleSwitch");


// Step 2: Add event listener to detect change
toggle.addEventListener("change", function () {

    // Step 3: Check if toggle is ON (checked)
    if (toggle.checked) {

        // Change prices to yearly values
        document.getElementById("basicPrice").innerText = "₹5000 / year";
        document.getElementById("proPrice").innerText = "₹10000 / year";
        document.getElementById("premiumPrice").innerText = "₹15000 / year";

    } else {

        // Change prices back to monthly values
        document.getElementById("basicPrice").innerText = "₹500 / month";
        document.getElementById("proPrice").innerText = "₹1000 / month";
        document.getElementById("premiumPrice").innerText = "₹1500 / month";
    }

});