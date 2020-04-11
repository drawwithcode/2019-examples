function preload(){
  // put preload code here
}

var startingFrame;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('violet');

  // var url_string = window.location.href;
  var myUrl = new URL(window.location.href);

  startingFrame = myUrl.searchParams.get("startFrame")*1

  console.log(startingFrame);
}

function draw() {
  // put drawing code here
  background("violet");
  fill('red')
  textSize(80);
  text(startingFrame+frameCount, width/2, height/2);
}

function mouseClicked() {
	window.open("http://www.densitydesign.org", "_self");
}
