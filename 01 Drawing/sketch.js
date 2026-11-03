//01 DRAWING - PUMPKIN EMOJI

function setup() {
  createCanvas(400, 400);

  //want the whole thing to have no outline so can set it once in setup
  noStroke();

  //set angles to be degrees for the mouth
  angleMode(DEGREES);
}

function draw() {
  background(255);

  //3 triangles make up the stem
  fill(150, 100, 0);
  triangle(230, 110, 190, 110, 210, 70);
  triangle(210, 110, 170, 110, 190, 70);
  triangle(190, 70, 210, 70, 200, 110);

  //PUMPKIN BODY
  //back 2 ellipses
  fill(255, 170, 50);
  ellipse(130, 200, 150, 200);

  fill(220, 120, 0);
  ellipse(270, 200, 150, 200);


  //middle 2 ellipses
  fill(255, 160, 25);
  ellipse(155, 200, 150, 200);

  fill(240, 130, 0);
  ellipse(245, 200, 150, 200);


  //front ellipse
  fill(255, 150, 0);
  ellipse(200, 200, 150, 200);



  //FACE PIECES
  //left eye
  fill(0);
  circle(150, 170, 60);

  //right eye

  circle(250, 170, 60);
  //Mouth

  arc(220, 230, 60, 60, -30, 180);
  arc(180, 230, 60, 60, 0, 210);

  //remove middle of mouth arcs by covering them with same orange as the pumpkin
  fill(255, 150, 0);
  circle(220, 230, 40);
  circle(180, 230, 40);
}