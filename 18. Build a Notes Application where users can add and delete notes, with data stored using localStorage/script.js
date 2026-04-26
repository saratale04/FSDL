// Get notes from localStorage if available, otherwise create empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Function to save notes array into localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Function to display all notes on the webpage
function displayNotes() {
    const notesList = document.getElementById("notesList");

    // Clear existing list before re-rendering
    notesList.innerHTML = "";

    // Loop through each note and display it
    notes.forEach((note, index) => {

        // Create list item
        const li = document.createElement("li");
        li.textContent = note;

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        // When delete button is clicked, remove that note
        deleteBtn.onclick = () => deleteNote(index);

        // Add button to list item
        li.appendChild(deleteBtn);

        // Add list item to the list
        notesList.appendChild(li);
    });
}

// Function to add a new note
function addNote() {
    const input = document.getElementById("noteInput");

    // Get text and remove extra spaces
    const noteText = input.value.trim();

    // If input is empty, do nothing
    if (noteText === "") return;

    // Add new note to array
    notes.push(noteText);
    saveNotes();
    displayNotes();

    // Clear input field
    input.value = "";
}

// Function to delete a note using its index
function deleteNote(index) {

    // Remove 1 note at given index
    notes.splice(index, 1);

    // Save updated notes
    saveNotes();
    displayNotes();
}

// When page loads, show saved notes
displayNotes();