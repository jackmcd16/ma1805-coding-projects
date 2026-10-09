function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);


  //3 triangles make up the stem
  noStroke();
  fill(150, 100, 0);
  triangle(230, 110, 190, 110, 210, 70);

  noStroke();
  fill(150, 100, 0);
  triangle(210, 110, 170, 110, 190, 70);

  noStroke();
  fill(150, 100, 0);
  triangle(190, 70, 210, 70, 200, 110);



  //PUMPKIN BODY
  //back 2 ellipses
  noStroke();
  fill(255, 170, 50);
  ellipse(130, 200, 150, 200);

  noStroke();
  fill(220, 120, 0);
  ellipse(270, 200, 150, 200);


  //middle 2 ellipses
  noStroke();
  fill(255, 160, 25);
  ellipse(155, 200, 150, 200);

  noStroke();
  fill(240, 130, 0);
  ellipse(245, 200, 150, 200);


  //front ellipse
  noStroke();
  fill(255, 150, 0);
  ellipse(200, 200, 150, 200);



  //FACE PIECES
  //left eye
  noStroke();
  fill(0);
  circle(150, 170, 60);

  //right eye
  noStroke();
  fill(0);
  circle(250, 170, 60);


  //Mouth
  noStroke();
  fill(0);
  arc(220, 230, 60, 60, 100, PI);

  noStroke();
  fill(0);
  arc(180, 230, 60, 60, 0, PI - 100);

  noStroke();
  fill(255, 150, 0);
  circle(220, 230, 40);

  noStroke();
  fill(255, 150, 0);
  circle(180, 230, 40);

  //ADD SPARKLES
}