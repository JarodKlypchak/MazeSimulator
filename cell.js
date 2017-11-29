class Cell {
    constructor(x, y, row, col) {
        this.x = x;
        this.y = y;
        this.width = cellWidth;
        this.height = cellWidth;
        this.wall = [true, true, true, true];
        this.row = row;
        this.col = col;
        this.color = "white";
        this.prev = null;
        this.dist = -1;
    }

    display() {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.height, this.width);

        ctx.fillStyle = "black";
        if (this.wall[0]) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.width, this.y);
            ctx.stroke();
        }
        if (this.wall[1]) {
            ctx.beginPath();
            ctx.moveTo(this.x + this.width, this.y);
            ctx.lineTo(this.x + this.width, this.y + this.height);
            ctx.stroke();
        }
        if (this.wall[2]) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.height);
            ctx.lineTo(this.x + this.width, this.y + this.height);
            ctx.stroke();
        }
        if (this.wall[3]) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.height);
            ctx.stroke();
        }
    }

    getNeighbor(grid) {
        let neighbors = new Array();
        if (this.row > 0) {
            if (grid[this.row - 1][this.col].color == "white") {
                neighbors.push(grid[this.row - 1][this.col]);
            }
        }
        if (this.row < size - 1) {
            if (grid[this.row + 1][this.col].color == "white") {
                neighbors.push(grid[this.row + 1][this.col]);
            }
        }
        if (this.col > 0) {
            if (grid[this.row][this.col - 1].color == "white") {
                neighbors.push(grid[this.row][this.col - 1]);
            }
        }
        if (this.col < size - 1) {
            if (grid[this.row][this.col + 1].color == "white") {
                neighbors.push(grid[this.row][this.col + 1]);
            }
        }
        if (neighbors.length > 0) {
            let index = Math.floor(Math.random() * neighbors.length);
            return neighbors[index];
        } else {
            return null;
        }
    }
    neighbors(grid) {
        let row = this.row;
        let col = this.col;
        let n = new Array();

        if (!this.wall[0] && (row != 0 || col != 0)) {
            n.push(grid[row][col - 1]);
        }
        if (!this.wall[1]) {
            n.push(grid[row + 1][col]);
        }
        if (!this.wall[2] && (row != size - 1 || col != size - 1)) {
            n.push(grid[row][col + 1]);
        }
        if (!this.wall[3]) {
            n.push(grid[row - 1][col]);
        }

        return n;
    }
}