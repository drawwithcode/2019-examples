// API Key for Mapbox. Get one here:
// https://www.mapbox.com/studio/account/tokens/
const key = 'pk.eyJ1IjoibWlraW1hIiwiYSI6IjNvWUMwaUEifQ.Za_-O03W3UdQxZwS3bLxtg'

// Options for map
const options = {
	lat: 0,
	lng: 0,
	zoom: 4,
	studio: true, // false to use non studio styles
	//style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
	style: 'mapbox://styles/mikima/cjfy1ltb45xo32spj8vpry2y3',
};

// Create an instance of Mapbox
const mappa = new Mappa('MapboxGL', key);
let myMap;

let canvas;
let meteorites;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);

	// Create a tile map and overlay the canvas on top.
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}
