const CELLSIZES = [20, 50, 100];
const COLOURS = ["#CD5C5C", "#FA8072", "#FFA07A"]
function setup() {
  createCanvas(600, 800);
  noLoop()
}

function draw() {
  background(220);
  noStroke()
  ////////////////
  ////////////////
  // Piet Modrian
  ///////////////
  /*let x = 0;
  let y = 0;
  let currentWidth = random(CELLSIZES);
  let currentHeight = random(CELLSIZES);
  strokeWeight(4)
  while(y < height) {
    let cellsize = random(CELLSIZES); // provides a random choice from CELLSIZES array
    while(x < width) {
      fill(random(COLOURS)) // for black and white use 255 instead of COLOURS
      rect(x, y, currentWidth, currentHeight)
      x += currentWidth;
      currentWidth = random(CELLSIZES)
    }
    x = 0;
    y += currentHeight;
    currentHeight = random(CELLSIZES)
  } */
// simple grid
  ///////////////
  const ARCVALUES = [PI/2, PI, TAU * 0.5, TAU * .75, TAU];
  const CELLSIZE = 50;
  for(let y = 0; y< height; y += CELLSIZE) {
    for(let x = 0; x < width; x += CELLSIZE) {
      fill(random(255))
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES))
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE, CELLSIZE, 2, 0, random(ARCVALUES))
    }
  } 
    
}
