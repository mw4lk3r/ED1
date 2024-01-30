let gif;

function preload (){
gif = load Image ('Assets/GIF_Walker copy.gif');
}


// create a program that enables us to customize the number of squares in a grid
// two variables. 1) to chose the number of squares, 2) one that defines the side length based on the window width

function setup() {
	// runs one time
  createCanvas(windowWidth, windowHeight);
  cursor('assets/explode.png')
  fill ('gray');
  strokeWeight(1);
}

function draw() {
  // runs in a loop
  
  background ('white');
  
  var num = 5; // variable for the number of squares
  var sideLen = windowWidth/num; // variable for the side length of each square
  
  
   for (var y = 0; y < 2 * windowHeight; y = y + sideLen) { // loop to create a grid in the y direction
  
  for (var x = 0; x < 2 * windowWidth; x = x + sideLen) { // loop to create a row of squares in the x direction
image (gif, x, y, sideLen, sideLen);
		}    
    }
  }
  
function windowResized (){
  resizeCanvas(windowWidth, windowHeight)
}