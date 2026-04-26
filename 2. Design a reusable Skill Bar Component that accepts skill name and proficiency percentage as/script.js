/*
========================================================
SKILL BAR COMPONENT WITH INPUT
========================================================

📌 HOW TO RUN:

1. Create folder
2. Add files:
   - index.html
   - style.css
   - script.js

3. Open index.html in browser

4. Enter skill name and percentage
5. Click "Add Skill"
   → Skill bar will be created

========================================================

📌 LOGIC:

- Take input from user
- Use button click event
- Call reusable function
- Dynamically create UI

========================================================
*/


// Get reference of main container where skills will be displayed
let container = document.getElementById("skillsContainer");


// Reusable function to create skill bar
function createSkillBar(skillName, percentage) {

    // Create main div for one skill
    let skillDiv = document.createElement("div");
    skillDiv.className = "skill";

    // Create element to show skill name
    let name = document.createElement("div");
    name.className = "skill-name";
    name.innerText = skillName; // set skill name text

    // Create bar background
    let bar = document.createElement("div");
    bar.className = "bar";

    // Create progress (filled part of bar)
    let progress = document.createElement("div");
    progress.className = "progress";

    // Set width of progress bar based on percentage
    progress.style.width = percentage + "%";

    // Display percentage inside bar
    progress.innerText = percentage + "%";

    // Add progress inside bar
    bar.appendChild(progress);

    // Add name and bar inside main skill div
    skillDiv.appendChild(name);
    skillDiv.appendChild(bar);

    // Finally add skill div to container
    container.appendChild(skillDiv);
}


// Function to read user input and create skill
function addSkill() {

    // Get value of skill name input
    let skillName = document.getElementById("skillName").value;

    // Get value of percentage input
    let percentage = document.getElementById("skillPercent").value;

    // Check if inputs are empty
    if (skillName === "" || percentage === "") {
        alert("Please enter both fields");
        return; // stop execution
    }

    // Call reusable function to create skill bar
    createSkillBar(skillName, percentage);

    // Clear input fields after adding
    document.getElementById("skillName").value = "";
    document.getElementById("skillPercent").value = "";
}