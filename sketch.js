const CELLSIZES = [20, 50, 100];
function setup() {
  createCanvas(600, 800);
  noLoop()
}

function draw() {
  background(220);
  noStroke()
  ////////////////
  // simple grid
  ///////////////
  /*
  const CELLSIZE = 5;
  for(let y = 0; y< height; y += CELLSIZE) {
    for(let x = 0; x < width; x += CELLSIZE) {
      fill(random(255))
      rect(x, y, CELLSIZE);
    }
  } */

  ////////////////
  // Piet Modrian
  ///////////////
  let x = 0;
  let y = 0;
  while(y < height) {
    let cellsize = random(CELLSIZES); // provides a random choice from CELLSIZES array
    while(x < width) {
      fill(random(255))
      rect(x, y, cellsize)
      x += cellsize;
    }
    x = 0;
    y = cellsize;
  }
}
