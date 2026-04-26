let input = document.getElementById("inputText");
let output = document.getElementById("output");

// Reverse string
function reverseString() {
  let text = input.value;
  output.innerText = text.split("").reverse().join("");
}

// Convert to uppercase
function toUpper() {
  output.innerText = input.value.toUpperCase();
}

// Convert to lowercase
function toLower() {
  output.innerText = input.value.toLowerCase();
}

// Find length
function getLength() {
  output.innerText = "Length: " + input.value.length;
}