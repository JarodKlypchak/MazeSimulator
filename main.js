let canvas = document.getElementById("canvas");
let gen = document.getElementById("generate");
let run = document.getElementById("run");
let disp = document.getElementById("display");
let reset = document.getElementById("clear");
let cellWidth = 50;
let size = 20;
let interval = 1;
canvas.height = cellWidth * size + 50;
canvas.width = cellWidth * size + 50;

let grid = [];
for (let i = 0; i < size; i++) {
    grid[i] = new Array();
    for (let j = 0; j < size; j++) {
        grid[i][j] = new Cell(i * cellWidth, j * cellWidth, i, j);
        grid[i][j].display();
    }
}


function clear() {

    for (let i = 0; i < size; i++) {
        grid[i] = new Array();
        for (let j = 0; j < size; j++) {
            grid[i][j] = new Cell(i * cellWidth, j * cellWidth, i, j);
            grid[i][j].display();
        }
    }
    reset.disabled = true;
    run.disabled = true;
    disp.disabled = true;
    generate.disabled = false;

}

function updateDisplay() {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {

            grid[i][j].display();
        }
    }
}

generate.onclick = function() {
    generateMaze();

}
run.onclick = function() {
    runMaze();

}
reset.onclick = function() {
    clear();

}
display.onclick = function() {
    displaySolution();

}