// Created by Cameron Baird.
// This will generate a maze on a canvas using p5.js and some algorithms.
// The algorithm is depth-first search.

const xDimension = 500;
const yDimension = 500;
const dx = 25;
const dy = 25;
var rows = xDimension / dx;
var cols = yDimension / dy;

var maze = [];
var current;

var stack = [];

function setup() {
    
    createCanvas(xDimension, yDimension);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            maze.push(cell);
        }
    }

    current = maze[0];
    
    frameRate(30);
}

function draw() {
    
    background('white');
    
    for (let i = 0; i < maze.length; i++) {
        maze[i].show();
    }

    current.visited = true;
    current.highlight();
    
    let chosenNeighbor = current.checkNeighbors();
    if (chosenNeighbor) {
        stack.push(current);
        removeWalls(current, chosenNeighbor);
        current = chosenNeighbor;
        current.visited = true;
    } else if (stack.length > 0) {
        current = stack.pop();
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}

function removeWalls(a, b) {
    let x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}












