////////////////////////////////////////////////////////
// Settings:
// click "c" for colour change (red/black)
// click "e" to toggle on and off the erasing mode
///////////////////////////////////////////////////////


let arr = [];
let cellClicked = [];
let cellColor = []; // Stores colors for each cell (red/black)
const CELLSIZE = 18; // Size of each square
let currentColor;
let eraseMode = false; // Default erase mode setting

function setup() {
    let w = floor(innerWidth / CELLSIZE) * CELLSIZE;
    let h = floor(innerHeight / CELLSIZE) * CELLSIZE;
    createCanvas(w, h);
    
    currentColor = color(172, 26, 26); // Default color is red
    
    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            cellClicked.push(false);
            cellColor.push(color(255)); // Default white background
        }
    }
}

function draw() {
    background(220);
    let cellIndex = 0;
    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            if (cellClicked[cellIndex]) {
                fill(cellColor[cellIndex]);
            } else {
                fill(255);
            }
            stroke(0);
            rect(x, y, CELLSIZE, CELLSIZE);
            cellIndex++;
        }
    }
}

function getCellIndex() {
    let col = floor(mouseX / CELLSIZE);
    let row = floor(mouseY / CELLSIZE);
    let cols = width / CELLSIZE;
    if (col >= 0 && col < cols && row >= 0 && row < height / CELLSIZE) {
        return row * cols + col;
    }
    return -1;
}

function mousePressed() {
    let index = getCellIndex();
    if (index >= 0 && index < cellClicked.length) {
        if (eraseMode) {
            cellClicked[index] = false;
            cellColor[index] = color(255); // Reset to white
        } else {
            cellClicked[index] = true;
            cellColor[index] = currentColor;
        }
    }
}

function mouseDragged() {
    let index = getCellIndex();
    if (index >= 0 && index < cellClicked.length) {
        if (eraseMode) {
            cellClicked[index] = false;
            cellColor[index] = color(255); // Reset to white
        } else {
            cellClicked[index] = true;
            cellColor[index] = currentColor;
        }
    }
}

function keyPressed() {
    if (key === 'C' || key === 'c') {
        currentColor = (currentColor.levels[0] === 172) ? color(0) : color(172, 26, 26); // Toggle between red and black
    } else if (key === 'E' || key === 'e') {
        eraseMode = !eraseMode; // Toggle erase mode on/off
    }
}