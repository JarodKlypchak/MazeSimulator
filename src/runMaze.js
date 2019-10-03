var q;
var v;
var b;

function runMaze() {

    let current = grid[0][0];
    current.dist = 0;
    q = new Array();
    q.push(current);
    b = setInterval(step, interval);




}

function step() {

    v = q[0];
    q.splice(0, 1);
    let neighbors = v.neighbors(grid);
    v.color = "lightgray";
    v.display();
    for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];


        if (w.dist == -1) {
            w.dist = v.dist + 1;
            w.prev = v;
            w.color = "red";
            w.display();
            q.push(w);

        }
        /*
        if (w.row == (size - 1) && w.col == size - 1) {
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    grid[i][j].color = "white";
                    grid[i][j].display();
                }
            }
            run.disabled = true;
            display.disabled = false;
            clearInterval(b);
        }
        */

    }
    v.color = "white";
    v.display();
    if (q.length < 1) {
        run.disabled = true;
        display.disabled = false;
        clearInterval(b);
    }


}