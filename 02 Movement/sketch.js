let x = 0; 
let y = 0; 
let lines = 0; 

function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
}
 
function draw() {
  background(155, 215, 250);

  // BASE SUN
  fill(255, 226, 45);
  noStroke();
  ellipse(500, 650, 180);

  //WATER
  fill(83, 133, 227);
  noStroke();
  rect(0, 700, 1000, 1000);

  //SUN REFLECTION
  fill(212, 203, 91);
  noStroke();
  ellipse(500, 725, 200, 25);

  fill(202, 198, 103);
  noStroke();
  ellipse(500, 760, 170, 25);

  fill(169, 180, 136);
  noStroke();
  ellipse(500, 795, 130, 20);

  fill(126, 157, 182);
  noStroke();
  ellipse(500, 825, 90, 15);
  
  //SAND
  fill(255, 239, 176);
  noStroke();
  rect(0, 900, 1000, 1000);


  //SUN RAYS
  let i = 0
  while (i < 200) {
    let x2 = random(490, 510);
    let y2 = random(640, 660);
    let x3 = random(50, 950);
    let y3 = random(50, 950);

    fill(255, 226, 45);
    triangle(500, 650, x2, y2, x3, y3);
    i = i + 1
  }

  let j = 0
  while (j < 200) {

    fill(255, 192, 32);
    noStroke();
    ellipse(500, 650, 100);

    let OrangeX2 = random(490, 510);
    let OrangeY2 = random( 640, 660);
    let OrangeX3 = random(300, 700);
    let OrangeY3 = random(450, 850);
    
    fill(255, 192, 32);
    triangle(500, 650, OrangeX2, OrangeY2, OrangeX3, OrangeY3);
    j = j + 1
  }
}