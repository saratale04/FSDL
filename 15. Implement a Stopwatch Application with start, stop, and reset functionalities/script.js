let seconds = 0;     // Store time in seconds
let timer = null;    // Store interval reference

// Start stopwatch
function start() {

    // Prevent multiple intervals
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;
        displayTime();
    }, 1000);
}

// Stop stopwatch
function stop() {
    clearInterval(timer);
    timer = null;
}

// Reset stopwatch
function reset() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    displayTime();
}

// Convert seconds → HH:MM:SS
function displayTime() {

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    // Add leading zero (e.g., 05)
    hrs = String(hrs).padStart(2, '0');
    mins = String(mins).padStart(2, '0');
    secs = String(secs).padStart(2, '0');

    document.getElementById("time").innerText =
        `${hrs}:${mins}:${secs}`;
}