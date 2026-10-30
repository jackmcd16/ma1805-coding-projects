// 04 MEDIA - KNIGHTS OF GUINEVERE 

//declaring images and sounds here to make them global
let bottomIMG;
let topIMG;

let happyAudio;
let scaryMusic;
let distortion = 1.0;


function preload() {
  // preload images and audio to be used later
  bottomIMG = loadImage('media/reality.png');
  topIMG = loadImage('media/fantasy.png');

  happyAudio = loadSound('media/happyMusic.mp3');
  scaryMusic = loadSound('media/scaryMusic.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // creates base canvas as the top image
  image(topIMG, 0, 0);

  //adds music
  happyAudio.loop();
  happyAudio.amp(1.0);

  scaryMusic.loop();
  scaryMusic.amp(0.0);
}

function mouseDragged () {
  // copies the bottom image onto the top image
  // used 4 so it extends every direction of the mouse instead of the mouse being in the corner
  copy(bottomIMG, mouseX, mouseY, 50, 50, mouseX, mouseY, 50, 50);
  copy(bottomIMG, mouseX, mouseY, -50, 50, mouseX, mouseY, -50, 50);
  copy(bottomIMG, mouseX, mouseY, 50, -50, mouseX, mouseY, 50, -50);
  copy(bottomIMG, mouseX, mouseY, -50, -50, mouseX, mouseY, -50, -50);

  if (distortion > 0.0) {
    distortion = distortion - .001;
    happyAudio.amp(distortion);
    scaryMusic.amp((1.0 - distortion));
  } 
}