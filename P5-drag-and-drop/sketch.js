function preload(){
  // put preload code here
}

var dragzone;

var img;

function setup() {
  createCanvas(400,400);
  background('red')
  // put setup code here
  dragzone = createElement('div', 'drag here files');
  //define style
  dragzone.style('border', '2px dashed gray');
  dragzone.style('padding', '10px');
  dragzone.dragOver(highlight);
  dragzone.dragLeave(unhighlight);
  dragzone.drop(loadFile);
}

function draw() {
  // put drawing code here
}

function highlight(){
	dragzone.style('background', 'yellow')
}

function unhighlight(){
	dragzone.style('background', 'white')
}


function loadFile(file){
	unhighlight();
	
	if(file.type == 'image'){
		img = createImg(file.data, function(){
			img.hide();
			image(img,0,0);
			var t = tint(0, 153, 204, 126);
			console.log(t)
			image(img,40,40);
		})
	} else if(file.type == 'text'){
		console.log(file.data);
	}
}
