/* 
    Maze Generation (DFS) algorithm:
        - Pick a starting point
        - Choose a random direction to go in
        - If that cell has been visited, don't go there
        - If the cell has not been visited, remove the wall between the
            current cell and the random one, then search at that cell recursively
        - Unvisited cells should be colored gray
        - Visited cells that have not been fully explored should be colored         orange
        - Visited cells that have no remaining neighbors should be colored white
*/

// How to draw a grid in js?


// Setting up maze dimensions:
const canvas = document.getElementById('maze');
const context = canvas.getContext("2d");

const gridWidth = 350, gridHeight = 350;
const numberOfRows = 10, numberOfColumns = 10;
const cellWidth = gridWidth / numberOfColumns, cellHeight = gridHeight / numberOfRows;


// Creating an array to store the cells in:
var cells = createCellArray();


// Finding the starting point:
var startPicked = false;
var startingCell = cells[0][0];


function setupStartingGrid() {
    canvas.width = gridWidth;
    canvas.height = gridHeight;
    
    var count = 0;
    for (let i = 0; i < numberOfColumns; i++) {
        for (let j = 0; j < numberOfRows; j++) {
            cells[i][j] = new MazeCell(i, j);
            updateWalls(cells[i][j]);
        }
    }
}

function MazeCell(x, y) {
    this.x = x * cellWidth;
    this.y = y * cellHeight;
    this.hasBeenVisited = false;
    this.hasTopWall = true;
    this.hasRightWall = true;
    this.hasBottomWall = true;
    this.hasLeftWall = true;
//    colorCell(this, "gray");
}

function updateWalls(cell) {
    if (cell.hasTopWall) {
        line(cell.x, cell.y, cell.x + cellWidth, cell.y);
    }
    if (cell.hasRightWall) {
        line(cell.x + cellWidth, cell.y, cell.x + cellWidth, cell.y + cellHeight);
    }
    if (cell.hasBottomWall) {
        line(cell.x + cellWidth, cell.y + cellHeight, cell.x, cell.y + cellHeight);
    }
    if (cell.hasLeftWall) {
        line(cell.x, cell.y + cellHeight, cell.x, cell.y);
    }
}

function line(x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.stroke();
}

function colorCell(cell, color) {
    context.beginPath();
    console.log(cell.x / cellWidth, cell.y / cellHeight);
    context.rect(cell.x, cell.y, (cell.x / cellWidth) + cellWidth, (cell.y / cellHeight) + cellWidth);
    context.fillStyle = color;
    context.fill();
}

function createCellArray() {
    let cArr = new Array(numberOfRows);
    for (let i = 0; i < cArr.length; i++) {
        cArr[i] = new Array(numberOfColumns);
    }
    return cArr;
}

function pickStart(event) {
    let grid = canvas.getBoundingClientRect();
    let x = Math.floor((event.clientX - grid.left) / cellWidth);
    let y = Math.floor((event.clientY - grid.top) / cellHeight);
    
    console.log(x, y);
    
    startPicked = true;
    let pickedCell = cells[x][y];
    colorCell(pickedCell, "yellow");
    startingCell = pickedCell;
}

function generateMaze(x0, y0) {
    if (!startPicked) {
        // Give an alert or something to indicate that the starting point has not been picked
        return;
    }
    
}



















