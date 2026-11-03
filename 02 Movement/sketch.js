//02 MOVEMENT - SUNSET

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  frameRate(30);
}
 
function draw() {
  // initially checking mouse to reference in all other variables
  let sunset = 1000 - mouseY;
  let sunPercent = sunset / 1000;


  //Base background, grows darker with lower mouse value
  let BGred = 154 * sunPercent;
  let BGgreen = 207 * sunPercent;
  let BGblue = (198 * sunPercent) + 100;
  background(BGred, BGgreen, BGblue);


  //Sunset gradient
  let layer = 2 * mouseY;
  fill(148, 42, 181, 70);
  ellipse(width/2, height, width*2, (layer * .95));

  fill(209, 75, 167, 75);
  ellipse(width/2, height, width*2, (layer * .8));

  fill(238, 139, 117, 80);
  ellipse(width/2, height, width*2, (layer * .65));

  fill(255, 194, 89, 90);
  ellipse(width/2, height, width*2, (layer * .5));

  fill(255, 225, 92, 95);
  ellipse(width/2, height, width*2, (layer * .35));

  
  //Sun moving up and down with mouse, with small buffer on top and bottom
  let sunY = 250 + (mouseY * .5) - 50;

  let sunRed = 255;
  let sunGreen = (38 * sunPercent) + 184;
  let sunBlue = 75;
  fill(sunRed, sunGreen, sunBlue, 90);
  circle(500, sunY, 150);

  fill(sunRed, sunGreen, sunBlue);
  circle(500, sunY, 140);

  //Sun rays
  let i = 0
  while (i < 200) {
    let x1 = random(360, 640);
    let y1 = random((sunY - 140), (sunY + 140));
    let x2 = random(490, 510);
    let y2 = random((sunY - 10), (sunY + 10));
    let halfY = random([true, false]);
    let halfX = random([true, false]);

    fill(sunRed, sunGreen, sunBlue);
    triangle(500, sunY, x1, y1, x2, y2);
    
    i++
  }

  //water 
  21, 34, 92
  let waterRed = (62 * sunPercent) + 21;
  let waterGreen = (100 * sunPercent + 34);
  let waterBlue = (135 * sunPercent) + 92;
  fill(waterRed, waterGreen, waterBlue);
  rect(0, 700, 1000, 1000);


  //sun reflection
  let sunReflect = 100 - (sunPercent * 100)
  fill(sunRed, sunGreen, sunBlue, (sunReflect * .9));
  ellipse(500, 725, 200, 25);

  fill(sunRed, sunGreen, sunBlue, (sunReflect * .7));
  ellipse(500, 760, 170, 25);

  fill(sunRed, sunGreen, sunBlue, (sunReflect * .5));
  ellipse(500, 795, 130, 20);

  fill(sunRed, sunGreen, sunBlue, (sunReflect * .3));
  ellipse(500, 825, 90, 15);
  

  //sand
  fill(255, 239, 176);
  rect(0, 900, 1000, 1000);

  fill(255, 139, 100, (sunReflect * .99));
  rect(0, 900, 1000, 1000);
}