function Cell(i, j) {

    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbors = function() {
        let neighbors = [];

        let top = maze[index(i, j - 1)];
        let right = maze[index(i + 1, j)];
        let bottom = maze[index(i, j + 1)];
        let left = maze[index(i - 1, j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    };
    
    
    this.highlight = function() {
        let x = this.i * dx;
        let y = this.j * dy;
        noStroke();
        fill('red');
        rect(x, y, dx, dy);
    };

    this.show = function() {
        let x = this.i * dx;
        let y = this.j * dy;
        stroke('black');
        if (this.walls[0]) {
            line(x, y, x + dx, y);
        }
        if (this.walls[1]) {
            line(x + dx, y, x + dx, y + dy);
        }
        if (this.walls[2]) {
            line(x + dx, y + dy, x, y + dy);
        }
        if (this.walls[3]) {
            line(x, y + dy, x, y);
        }

        if (this.visited) {
            noStroke();
            fill('orange');
            rect(x, y, dx, dy);
        }
    };
}