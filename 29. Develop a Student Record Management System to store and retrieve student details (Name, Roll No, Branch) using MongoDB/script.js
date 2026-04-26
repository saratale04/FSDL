// =======================================
// FILE NAME: script.js
// JavaScript for Student Management
// =======================================

// Backend API URL
const API_URL = "http://localhost:5000/students";

// =======================================
// FUNCTION TO ADD STUDENT
// =======================================
function addStudent()
{
    // Get name from input box
    let name = document.getElementById("name").value;

    // Get roll number from input box
    let rollno = document.getElementById("rollno").value;

    // Get branch from input box
    let branch = document.getElementById("branch").value;

    // Check if any field is empty
    if(name==="" || rollno==="" || branch==="")
    {
        alert("Please fill all fields"); // Show alert
        return; // Stop function
    }

    // Send data to backend
    fetch(API_URL,
    {
        method:"POST", // POST method

        headers:
        {
            "Content-Type":"application/json" // JSON data
        },

        body:JSON.stringify(
        {
            name:name, // Student name
            rollno:rollno, // Roll number
            branch:branch // Branch
        })
    })

    // Convert response to JSON
    .then(response => response.json())

    // After successful insert
    .then(data =>
    {
        alert("Student Added Successfully"); // Success message

        // Clear input boxes
        document.getElementById("name").value = "";
        document.getElementById("rollno").value = "";
        document.getElementById("branch").value = "";

        // Refresh list
        getStudents();
    })

    // If error occurs
    .catch(error => console.log(error));
}

// =======================================
// FUNCTION TO GET ALL STUDENTS
// =======================================
function getStudents()
{
    // Request all students
    fetch(API_URL)

    // Convert response to JSON
    .then(response => response.json())

    // Use received data
    .then(data =>
    {
        // Empty string for output
        let output = "";

        // Loop through each student
        data.forEach(student =>
        {
            // Create student card HTML
            output += `
            <div class="student-card">
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Roll No:</strong> ${student.rollno}</p>
                <p><strong>Branch:</strong> ${student.branch}</p>
            </div>
            `;
        });

        // Show records on webpage
        document.getElementById("studentList").innerHTML = output;
    })

    // If error occurs
    .catch(error => console.log(error));
}