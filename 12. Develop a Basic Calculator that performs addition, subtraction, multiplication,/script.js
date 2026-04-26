let display = document.getElementById("display");

// Add number/operator to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Calculate result
function calculate() {
  try {
    if (display.value === "") return;

    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}