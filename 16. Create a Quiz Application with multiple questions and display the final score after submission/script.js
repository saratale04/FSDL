// ===== FUNCTION TO SUBMIT QUIZ =====
function submitQuiz() {

    let score = 0;  // Variable to store user's score

    // Object containing correct answers
    let answers = {
        q1: "a",
        q2: "a",
        q3: "a"
    };

    // Loop through each question
    for (let q in answers) {

        // Get the selected option for current question
        let selected = document.querySelector(`input[name="${q}"]:checked`);

        // If user selected an option AND it's correct → increase score
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    // Store score in browser storage (instead of URL)
    localStorage.setItem("quizScore", score);

    // Redirect to result page
    window.location.href = "result.html";
}



// ===== RESULT PAGE LOGIC =====

// Check if we are on result page (element with id="score" exists)
if (document.getElementById("score")) {

    // Get stored score from localStorage
    // If nothing found → default to 0
    let score = parseInt(localStorage.getItem("quizScore")) || 0;

    let total = 3;  // Total number of questions

    // Display score on screen
    document.getElementById("score").innerText = score + " / " + total;

    let message = "";  // Variable to store feedback message

    // Decide message based on score
    if (score === total) {
        message = "Excellent!";
    } else if (score >= 2) {
        message = "Good job!";
    } else {
        message = "Try again!";
    }

    // Display message
    document.getElementById("message").innerText = message;

    // Optional: remove stored score after displaying
    localStorage.removeItem("quizScore");
}