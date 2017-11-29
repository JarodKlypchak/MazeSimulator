var current;
var c;

function displaySolution() {

    current = grid[size - 1][size - 1];

    c = setInterval(displayStep, 10);
    updateDisplay();

}

function displayStep() {

    current.color = "red";
    current.prev.color = "red";
    current = current.prev;
    updateDisplay();
    if (current.prev == null) {
        display.disabled = true;
        clearInterval(c);

    }

}