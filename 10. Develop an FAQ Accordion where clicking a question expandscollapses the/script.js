// Select all questions
const questions = document.querySelectorAll(".question");

// Loop through each question
questions.forEach(question => {

  question.addEventListener("click", () => {

    const item = question.parentElement;

    // Toggle active class
    item.classList.toggle("active");

  });

});