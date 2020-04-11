var sketch1 = function(p){

	p.setup = function() {
		p.createCanvas(300,300);
		p.background(255,0,0,128);
	}
}

var sketch2 = function(p){

	p.setup = function() {
		var myCanvas = p.createCanvas(300, 300);
		myCanvas.position(50,50);

		p.background(0,0,255,128);
	}
}

var p1 = new p5(sketch1);
var p2 = new p5(sketch2);

p1.draw = function(){
	p1.fill('white');
	p1.ellipse(p1.mouseX, p1.mouseY, 20);
}

p2.draw = function(){
	p2.fill('white');
	p2.rect(p1.mouseX, p1.mouseY, 20,20);
}
