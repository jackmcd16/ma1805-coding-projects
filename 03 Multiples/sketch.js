// 03 MULTIPLES - CHESS BOARD 

// declaring initial variables
let row = 8;
let col = 8;
let pad = 5;
let sWidth, sHeight;
let colourCheck = 2;

let colName = ['8', '7', '6', '5', '4', '3', '2', '1'];
let rowName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// 0 means square is empty, 1 means square is full
let board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

let createPiece = false;
let pieceColour = true;



// setup creates the board
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
    // additional colour check makes the squares alternate colours each row
    colourCheck++
  }
  
}



function draw() {
  //checks whether the mouse is on the board, otherwise the code to find which square it is in will crash
  if (createPiece == true) {
    if (mouseX > windowHeight) {
      createPiece = false;
    }
  }

  // piece location and making
  if (createPiece == true) {

    // variables to find the square the mouse is on
    let xVal;
    let foundX = false;
    let a = 1;

    let yVal;
    let foundY = false;
    let b = 1;

    // finds x value of the cursor
    while (foundX == false) {
      if (mouseX > (sWidth * (a - 1))) {
        if (mouseX < (sWidth * a)) {
          xVal = (a * sWidth) - (sWidth/2);
          foundX = true;
        } else {
          a++
        };
      };
    };

    // finds y value of the cursor
    while (foundY == false) {
      if (mouseY > (sHeight * (b - 1))) {
        if (mouseY < (sHeight * b)) {
          yVal = (b * sHeight) - (sHeight/2);
          foundY = true;
        } else {
          b++
        };
      };
    };

    // checks if square is empty
    if (board[a-1][b-1] == 0) {
      // randomly select piece
      let piecePicker = random([0, 1, 2, 3, 4, 5]);
      board[a-1][b-1] = 1;

      // alternates piece colour between black and white
      if (pieceColour == true) {
        fill(255);
        stroke(0);
        strokeWeight(3);
        pieceColour = false;
      } else {
        fill(0);
        stroke(255);
        strokeWeight(3);
        pieceColour = true;
      };

      // PAWN
      if (piecePicker == 0) {
        triangle(xVal, (yVal - (sHeight/3)), (xVal - (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/5)), (yVal + (sHeight/4)));
        ellipse(xVal, (yVal - (sHeight/4)), (sHeight/4));
        rect(xVal, (yVal + (sHeight * .2)), (sHeight * .5), (sHeight * .12));
      }

      // ROOK
      if (piecePicker == 1) {
        quad((xVal - (sHeight/6)), (yVal - (sHeight/4)), (xVal - (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/6)), (yVal - (sHeight/4)));
        rect(xVal, (yVal + (sHeight * .2)), (sHeight * .5), (sHeight * .12));
        rect(xVal, (yVal - (sHeight * .3)), (sHeight * .12), (sHeight * .15));
        rect((xVal - (sHeight * .19)), (yVal - (sHeight * .3)), (sHeight * .12), (sHeight * .15));
        rect((xVal + (sHeight * .19)), (yVal - (sHeight * .3)), (sHeight * .12), (sHeight * .15));
        rect(xVal, (yVal - (sHeight * .2)), (sHeight * .5), (sHeight * .12));
      }

      // KNIGHT
      if (piecePicker == 2) {
        triangle(xVal, (yVal - (sHeight * .25)), (xVal + (sHeight * .1)), (yVal - (sHeight * .1)), (xVal + (sHeight * .2)), (yVal - (sHeight * .3)));
        quad((xVal - (sHeight * .2)), (yVal + (sHeight * .2)), (xVal - (sHeight * .05)), yVal, (xVal + (sHeight * .2)), yVal, (xVal + (sHeight * .15)), (yVal + (sHeight * .2)));
        quad((xVal - (sHeight * .05)), yVal, (xVal + (sHeight * .2)), yVal,  (xVal +  (sHeight * .1)), (yVal - (sHeight * .25)), xVal, (yVal - (sHeight * .25)));
        quad((xVal - (sHeight * .05)), yVal, xVal, (yVal - (sHeight * .25)), (xVal - (sHeight * .2)), (yVal - (sHeight * .1)), (xVal - (sHeight * .2)), yVal);
        rect(xVal, (yVal + (sHeight * .2)), (sHeight * .5), (sHeight * .12));
      }

      // BISHOP
      if (piecePicker == 3) {
        triangle(xVal, (yVal - (sHeight/3)), (xVal - (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/5)), (yVal + (sHeight/4)));
        quad(xVal, (yVal - (sHeight * .1)), (xVal - (sHeight * .12)), (yVal - (sHeight * .2)), xVal, (yVal - (sHeight * .4)), (xVal + (sHeight * .12)), (yVal - (sHeight * .2)))
        rect(xVal, (yVal - (sHeight * .1)), (sHeight * .3), (sHeight * .07));
        rect(xVal, (yVal + (sHeight * .2)), (sHeight * .5), (sHeight * .12));
      }

      // QUEEN
      if (piecePicker == 4) {
        ellipse(xVal, (yVal - (sHeight * .33)), (sHeight * .15));
        quad((xVal - (sHeight/6)), (yVal - (sHeight * .2)), (xVal - (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/6)), (yVal - (sHeight * .2)));
        ellipse(xVal, (yVal - (sHeight * .17)), (sHeight * .44), (sHeight * .2));

        triangle((xVal - (sHeight * .18)), yVal, xVal + (sHeight * .18), yVal, (xVal + (sHeight * .3)), (yVal - (sHeight *.3)));
        triangle((xVal - (sHeight * .18)), yVal, xVal + (sHeight * .18), yVal, (xVal - (sHeight * .3)), (yVal - (sHeight *.3)));
        triangle((xVal - (sHeight * .18)), yVal, xVal + (sHeight * .18), yVal, xVal, (yVal - (sHeight *.3)));

        rect(xVal, yVal, (sHeight * .45), (sHeight * .07));
        rect(xVal, (yVal + (sHeight * .2)), (sHeight * .5), (sHeight * .12));
      }
      
      // KING
      if (piecePicker == 5) {
        rect(xVal, (yVal - (sHeight * .36)), (sHeight * .27), (sHeight * .09));
        rect(xVal, (yVal - (sHeight * .3)), (sHeight * .1), (sHeight * .3));
        quad((xVal - (sHeight/6)), (yVal - (sHeight/4)), (xVal - (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/5)), (yVal + (sHeight/4)), (xVal + (sHeight/6)), (yVal - (sHeight/4)));
        quad((xVal - (sHeight * .17)), yVal, (xVal + (sHeight * .17)), yVal, (xVal + (sHeight * .24)), (yVal - (sHeight * .3)), (xVal - (sHeight * .24)), (yVal - (sHeight * .3)))
        rect(xVal, yVal, (sHeight * .45), (sHeight * .07));
        rect(xVal, (yVal + (sHeight * .2)), (sHeight * .5), (sHeight * .12));

        noStroke();
        rect(xVal, (yVal - (sHeight * .36)), (sHeight * .23), (sHeight * .05));
      }
    }

    // turns off createPiece so it can be triggered again on the next mouse click
    createPiece = false;
  }
}



// detects when the mouse is clicked to activate the piece creation
function mouseClicked() {
  createPiece = true;

  return false;
}