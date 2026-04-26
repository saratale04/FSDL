document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || email === "" || course === "" || !gender) {
        alert("Please fill all required fields!");
        return;
    }

    alert("Registration Successful!");
});