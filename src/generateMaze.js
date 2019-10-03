var current;
var stack;
var done;
var a;

function generateMaze() {
    current = grid[0][0];
    stack = new Array();
    stack.push(current);
    done = false;
    a = setInterval(takeStep, interval);
    grid[0][0].wall[0] = false;
    grid[size - 1][size - 1].wall[2] = false;
}


function takeStep() {
    current.color = "black";
    current.display();
    let neighbor = current.getNeighbor(grid);

    if (neighbor != null) {


        removeWall(current, neighbor);
        current.color = "lightgray";
        current.display();
        current = neighbor;
        current.color = "black";
        current.display();
        stack.push(current);
    } else {
        if (stack.length > 0) {
            current.color = "lightgray";
            current.display();
            current = stack.pop();
            current.color = "black";
            current.display();
        } else {
            current.color = "lightgray";
            current.display();
            run.disabled = false;
            generate.disabled = true;
            reset.disabled = false;
            clearInterval(a);

        }
    }


}

function removeWall(current, neighbor) {
    if (current.row - neighbor.row == 1) {
        current.wall[3] = false;
        neighbor.wall[1] = false;
    }
    if (current.row - neighbor.row == -1) {
        current.wall[1] = false;
        neighbor.wall[3] = false;
    }
    if (current.col - neighbor.col == 1) {
        current.wall[0] = false;
        neighbor.wall[2] = false;
    }
    if (current.col - neighbor.col == -1) {
        current.wall[2] = false;
        neighbor.wall[0] = false;
    }
}