var current;
var c;

function displaySolution() {

    current = grid[size - 1][size - 1];

    c = setInterval(displayStep, 10);
    updateDisplay();

}

function displayStep() {

    current.color = "red";
    current.display();
    current.prev.color = "red";
    current.prev.display();
    current = current.prev;

    if (current.prev == null) {
        display.disabled = true;
        clearInterval(c);

    }

}