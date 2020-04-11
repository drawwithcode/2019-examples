function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('yellow');
}

function draw() {
  // put drawing code here
  background('yellow');
  textSize(100)
  text(frameCount, width/2, height/2);
}

function mouseClicked() {

	var urlToOpen = "page2.html?startFrame=" + frameCount;

	window.open(urlToOpen, "_self");
}
