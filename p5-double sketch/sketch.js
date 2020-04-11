// define first sketch
// the paramenter 'p' represent the p5 data object
// in a sort of way it "contains" the whole p5.js
var sketch = function(p){
	// methods and properties must be preceded
	// by the data object
	p.setup = function(){
		p.createCanvas(400,400);
		p.background('red');
		p.rectMode(p.CENTER);
	}
}
// define second sketch
var sketch2 = function(p){
	p.setup = function(){
		p.createCanvas(300,300);
		p.background('violet')
		p.background(255,0,0,128);
		p.rectMode(p.CENTER);
	}
}
// create p5 objects instances
var p1 = new p5(sketch);

var p2 = new p5(sketch2);

// add draw function for p1cv                                       
p1.draw = function(){
	p2.fill('red');
	p2.rect(p1.mouseX, p1.mouseY, 30,10);
	p1.fill('yellow');
	p1.rect(p1.mouseX, p1.mouseY, 20,20)
}

// add draw function for p2
p2.draw = function(){
	p2.fill('white');
	p2.ellipse(p2.mouseX,p2.mouseY,20);
	p1.fill('blue');
	p1.ellipse(p2.mouseX,p2.mouseY,30)
}
