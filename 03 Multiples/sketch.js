let row = 8;
let col = 8;
let pad = 5;
let sWidth, sHeight;
let colourCheck = 2;

let colName = ['8', '7', '6', '5', '4', '3', '2', '1'];
let rowName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let createPiece = false;

function setup() {
    createCanvas(windowHeight, windowHeight); 
    sWidth = (width/col);
    sHeight = (height/row);
    rectMode(CENTER); 
    noStroke();

    for(let i=0; i<row; i++){
    for(let j=0; j<col; j++){
      let x = (j*sWidth)+(sWidth/2);
      let y = (i*sHeight)+(sHeight/2);

      // makes black square, white text
      if ((colourCheck % 2) == 0) {
        fill(0); 
        rect(x, y, sWidth, sHeight); 

        // adds chess notation
        fill(255);
        textSize(25);
        textAlign(CENTER);
        text((rowName[j] + colName[i]), x, (y + (sHeight * 0.45)));
      } 

      // makes white square, black text
      else { 
        fill(255);
        rect(x, y, sWidth, sHeight);

        // adds chess notation
        fill(0);
        textSize(25);
        textAlign(CENTER);
        text((rowName[j] + colName[i]), x, (y + (sHeight * 0.45)));
      }
      colourCheck++
    }
    colourCheck++
  }
  
}





function draw() {

  if (createPiece == true) {

    let xVal;
    let foundX = false;
    let a = 1;

    let yVal;
    let foundY = false;
    let b = 1;

    while (foundX == false) {
      if (mouseX > (sWidth * (a - 1))) {
        if (mouseX < (sWidth * a)) {
          xVal = (a * sWidth) - (sWidth/2)
          foundX = true
        } else {
          a++
        }
      }
    }

    while (foundY == false) {
      if (mouseY > (sHeight * (b - 1))) {
        if (mouseY < (sHeight * b)) {
          yVal = (b * sHeight) - (sHeight/2)
          foundY = true
        } else {
          b++
        }
      }
    }

    fill(0);
    stroke(255);
    triangle(xVal, (yVal - (sHeight/3)), (xVal - (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/5)), (yVal + (sHeight/4)));
    ellipse(xVal, (yVal - (sHeight/4)), (sHeight/4));
    rect(xVal, (yVal + (sHeight * 0.2)), (sHeight * .5), (sHeight * .12));
    createPiece = false;
  }
}





function mouseClicked() {
  createPiece = true;

  return false;
}

