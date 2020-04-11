function preload() {
	// put preload code here
}

var texts = ['hello boys', 'P5 is nice', 'outside is raining', 'happy birthday']

function setup() {
	noCanvas();
	// put setup code here
	for (var i = 0; i < 100; i++) {
		var index = round(random(texts.length));
		var newP = createElement('p', texts[index]);
		newP.mouseClicked(newText)
	}


}

function draw() {
	// put drawing code here
}

function newText() {
	this.style('color', 'red');
	var index = round(random(texts.length));
	this.html(texts[index]);
}
