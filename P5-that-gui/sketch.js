// gui params
var fillColor = [180, 255, 255];
var radius = 20;

// gui
var visible = true;
var gui;

// dynamic parameters
var bigRadius;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(240);

  // Create Layout GUI
  gui = createGui();
  gui.addGlobals('radius','fillColor');

}

function draw() {
	fill(fillColor);
	ellipse(mouseX, mouseY, radius);

}
function mouseClicked() {
	window.open('http://www.densitydesign.org', '_self')
}

var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("due");
console.log(c);
console.log(JSON.parse(c))
