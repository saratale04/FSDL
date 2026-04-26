// =======================================
// FILE NAME: script.js
// JavaScript for Event Registration
// =======================================

// Backend API URL
const API_URL = "http://localhost:5000/participants";

// =======================================
// FUNCTION TO REGISTER PARTICIPANT
// =======================================
function registerParticipant()
{
    // Get name value
    let name = document.getElementById("name").value;

    // Get email value
    let email = document.getElementById("email").value;

    // Get event name value
    let eventname = document.getElementById("eventname").value;

    // Check empty fields
    if(name==="" || email==="" || eventname==="")
    {
        alert("Please fill all fields"); // Alert message
        return; // Stop function
    }

    // Send data to backend
    fetch(API_URL,
    {
        method:"POST", // POST request

        headers:
        {
            "Content-Type":"application/json" // JSON format
        },

        body:JSON.stringify(
        {
            name:name, // Participant name
            email:email, // Participant email
            eventname:eventname // Event name
        })
    })

    // Convert response to JSON
    .then(response => response.json())

    // After success
    .then(data =>
    {
        alert("Registration Successful"); // Success message

        // Clear inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("eventname").value = "";

        // Refresh records
        getParticipants();
    })

    // Error handling
    .catch(error => console.log(error));
}

// =======================================
// FUNCTION TO GET ALL PARTICIPANTS
// =======================================
function getParticipants()
{
    // Fetch data from backend
    fetch(API_URL)

    // Convert to JSON
    .then(response => response.json())

    // Use data
    .then(data =>
    {
        // Empty output string
        let output = "";

        // Loop through each participant
        data.forEach(participant =>
        {
            // Create card
            output += `
            <div class="participant-card">
                <p><strong>Name:</strong> ${participant.name}</p>
                <p><strong>Email:</strong> ${participant.email}</p>
                <p><strong>Event:</strong> ${participant.eventname}</p>
            </div>
            `;
        });

        // Show data on page
        document.getElementById("participantList").innerHTML = output;
    })

    // Error handling
    .catch(error => console.log(error));
}