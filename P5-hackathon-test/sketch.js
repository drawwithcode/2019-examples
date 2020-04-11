var mySound;
var fft = new p5.FFT();

function preload() {
	mySound = loadSound('assets/TG1_new.mp3');
}

function setup() {
	// put setup code here
	createCanvas(windowWidth, windowHeight);
	mySound.setVolume(0.1);

}

function draw() {
	// put drawing code here
	if (mySound.isPlaying()) {
		let spectrum = fft.analyze();
		console.log(spectrum)
		background(0)
		fill('red');
		for(var i = 0; i < 300; i++){
			var x = map(i, 0, 300, 0, width);
			var y = height/3;
			ellipse(x, y, spectrum[i]);
		}

		//
		fill('blue');
		// "bass", "lowMid", "mid", "highMid", "treble"
		var mybass = fft.getEnergy("bass");
		var mylowMid = fft.getEnergy("lowMid");
		var myhighMid = fft.getEnergy("highMid");
		var mytreble = fft.getEnergy("treble");
		ellipse(width/5, height/3*2, mybass);
		ellipse(width/5*2, height/3*2, mylowMid);
		ellipse(width/5*3, height/3*2, myhighMid);
		ellipse(width/5*4, height/3*2, mytreble);
	}
	// console.log(spectrum.length) //should be 1024
}

function mouseReleased() {
	console.log('click')
	if (mySound.isPlaying()) {
		mySound.pause();
	} else {
		mySound.loop();
	}
}
