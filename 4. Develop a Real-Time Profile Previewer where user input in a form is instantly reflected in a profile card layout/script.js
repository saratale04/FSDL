/*
========================================================
REAL-TIME PROFILE PREVIEWER - JAVASCRIPT FILE
========================================================

📌 HOW TO RUN:

1. Create folder → profile-previewer
2. Add files:
   - index.html
   - style.css
   - script.js

3. Open index.html in browser

4. Start typing in input fields
   → Profile updates instantly

========================================================

📌 LOGIC:

- We take input from user
- Use "input" event (real-time typing)
- Update profile card instantly

👉 No button required (real-time update)

========================================================
*/


// Step 1: Get input elements
let nameInput = document.getElementById("nameInput");
let bioInput = document.getElementById("bioInput");
let imgInput = document.getElementById("imgInput");


// Step 2: Get profile display elements
let profileName = document.getElementById("profileName");
let profileBio = document.getElementById("profileBio");
let profileImg = document.getElementById("profileImg");


// Step 3: Add event for Name input
nameInput.addEventListener("input", function () {

    // Update name in profile
    profileName.innerText = nameInput.value;
});


// Step 4: Add event for Bio input
bioInput.addEventListener("input", function () {

    // Update bio in profile
    profileBio.innerText = bioInput.value;
});


// Step 5: Add event for Image input
imgInput.addEventListener("input", function () {

    // Update image source
    profileImg.src = imgInput.value;
});