let gif;

function preload (){
gif = load Image ('Assets/GIF_Walker copy.gif');
}


// create a program that enables us to customize the number of squares in a grid
// two variables. 1) to chose the number of squares, 2) one that defines the side length based on the window width

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  fill ('white');
}

function draw() {
  // runs in a loop
  
  var num = 6; // variable for the number of squares
  var sideLen = windowWidth/num; // variable for the side length of each square
  
  
   for (var y = 0; y < windowHeight; y = y + sideLen) { // loop to create a grid in the y direction
  
  for (var x = 0; x < windowWidth; x = x + sideLen) { // loop to create a row of squares in the x direction
    image (gif, x, y, sideLen, sideLen);
  );
    
    
  }
  
  quad (
    0,0,
    sideLen,0,
    sideLen,sideLen,
    0,sideLen
  );


}
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight)
}