function preload() {
	// put preload code here
}

function setup() {
	// put setup code here
	var myCanvas = createCanvas(40, 40);
	background('red');

	var sketchContainer = select("#sketch");

	//myCanvas.parent(sketchContainer);
	sketchContainer.child(myCanvas);

	var descContainer = select("#description");

	var myP = createElement('p', 'This is a new paragraph');

	myP.parent(descContainer);
}

function draw() {
	// put drawing code here
}
