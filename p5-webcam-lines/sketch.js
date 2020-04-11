let capture;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	capture = createCapture(VIDEO);
	capture.hide();
	colorMode(HSB, 100);
}

function draw() {
	//image(capture, 0, 0) //, width, width * capture.height / capture.width);
	background(100);
	capture.loadPixels();
	//console.log(capture);
	var step = 5;
	for(var x = 0; x < capture.width; x+= step) {
		for(var y = 0; y < capture.height; y+= step) {
			var index = (x + y * capture.width) * 4;
			var h = capture.pixels[index];
			var s = capture.pixels[index+1];
			var b = capture.pixels[index+2];
			colorMode(RGB);
			stroke(lerpColor(color(255,0,0),color(0,0,255),h/100));
			colorMode(HSB, 100);
			push();
			translate(x,y);
			rotate(s/100*PI*2)
			// stroke(h);
			line(0,0,(100-b)/100*step*4,0);
			pop();
		}
	}
	//filter(INVERT);
}
