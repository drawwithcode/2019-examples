var myButton, myPara, myCanvas;

function setup() {
  // put setup code here
  myCanvas = createCanvas(400,400);
  background(240);
  myPara = createElement('p','a new paragraph');
  myButton = createElement('button', 'click me!')
  myCanvas.mousePressed(addPara);

	var myTitle = select('h1');

	myTitle.html('THIS IS THE NEW TITLE')

	myTitle.attribute('a','b');
	console.log(myTitle.elt.attributes)
}

function draw() {
  // put drawing code here
  ellipse(mouseX, mouseY, 20);
}

function addPara(){
	// createElement('p', 'current frame is: '+frameCount);
	console.log(myPara);
	myPara.html('current frame is: '+frameCount);

}
