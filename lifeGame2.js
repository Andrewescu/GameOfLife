let cvs = document.getElementById("gameScreen"); // cvs.width and cvs.height to access cvs properties
let ctx = cvs.getContext('2d');
const SIZE = 20;
let boxWidth = SIZE;
let boxHeight = SIZE;
var numBoxes = (cvs.width/20)*(cvs.height/20);


function refreshScreen() {
  ctx.fillStyle = "GREY"
  ctx.fillRect(0,0, cvs.width, cvs.height)
}


function drawBox(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,width,height);
}


function vertLines() {
  for (let i = boxHeight; i < cvs.width; i += boxHeight) {
    drawBox(i, 0, 1, cvs.height, "lightgrey");
  }
}


function horLines() {
  for (let i = 0; i < cvs.height; i += boxWidth) {
    drawBox(0, i, cvs.width, 1, "lightgrey");
  }
}


class litBox {
  constructor(xStart, yStart) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.color = "GREEN";
    this.state = -1;
  }
  

  drawBox() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xStart, this.yStart, SIZE, SIZE);
  }

  stateChange() {
    this.state *= (-1);
  }
}

// end of functions and classes, beginning code

// (xStart divided by size) * (yStart divided by size) = position in one dimensional array
// start counting from 1 and subtract to get starter for 0 positioned array


refreshScreen();
vertLines();
horLines();


let boxArr = [];
var xStarting = 0;
var yStarting = 0;


// create an empty list and populate it with our 2 dimensional box array
for (var i = 0; i < 1250; i++) {
  var box = new litBox(xStarting, yStarting);
  boxArr.push(box);

  xStarting += 20;
  if (xStarting > 980) {
    yStarting += 20;
    xStarting = 0;
  }
   
}


// this will capture mouse click event
// to get mouse position
// will then calcualte which sqaure in array was "clicked"
// and it will iterate through boxArr drawing all "lit" boxes
cvs.addEventListener("click", function(e) { 
  var cRect = cvs.getBoundingClientRect();        
  var cvsX = Math.round(e.clientX - cRect.left);  
  var cvsY = Math.round(e.clientY - cRect.top);   // these variables are mouse coord.

  var xStart = (Math.floor(cvsX/SIZE));
  var yStart = (Math.floor(cvsY/SIZE));    // this converts mouse coord into correct starting position to render box for appropriate click within box area

  var boxPos = xStart + yStart*20; 
  boxArr[boxPos].stateChange();
  refreshScreen();
  for (var i = 0; i < boxArr.length; i++){
    if (boxArr[i].state == 1){
      boxArr[i].drawBox();
    }
  }
  vertLines();
  horLines();

});




