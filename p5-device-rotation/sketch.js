function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background('black');
  noStroke();
  textSize(32);
  // Understanding device orientation: ALPHA = rotationZ
  // draw ALPHA red rectangle
  fill('red');
  rect(0,0,map(rotationZ, 0, 360, 1, width), height/3);
  // print values
  textAlign(CENTER)
  fill(255);
  text(round(rotationZ), width/2, height/6);

  // Understanding device orientation: BETA = rotationX
  fill('blue');
  rect(0,height/3,map(rotationX, -180, 180, 1, width), height/3);
  // print values
  fill(255);
  text(round(rotationX), width/2, height/2);

  // Understanding device orientation: GAMMA = rotationY
  fill('green');
  rect(0,height/3 * 2,map(rotationY, -180, 180, 1, width), height/3);
  // print values
  fill(255);
  text(round(rotationY), width/2, height/6*5);
}


function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
