let cvs = document.getElementById("gameScreen"); // cvs.width and cvs.height to access cvs properties
let ctx = cvs.getContext('2d');
let boxWidth = 20;
let boxHeight = 20;

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
  for (let i = boxWidth; i < cvs.height; i += boxWidth) {
    drawBox(0, i, cvs.width, 1, "lightgrey");
  }
}


refreshScreen();
vertLines();
horLines();

cvs.addEventListener("click", function(e) { 
  var cRect = cvs.getBoundingClientRect();        // Gets CSS pos, and width/height
  var cvsX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the cvs 
  var cvsY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make
  // cvsX and cvsY together hold the mouse position during the click event
  // now figure out how to track mouse position to light up appropriate clicked box
  // WIDTH:  1000 pixels 0 - 20
  // HEIGHT: 500 pixels
  refreshScreen();
  vertLines();
  horLines();
  ctx.fillText("X: "+cvsX+", Y: "+cvsY, 10, 20);
});





// canvas.addEventListener("mousemove", function(e) { 
//   var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
//   var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
//   var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
//   ctx.clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
//   ctx.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
// });
// drawBox(10, 0, "white", 1, cvs.height);
// drawBox(10, 0, "blue");
// drawBox(10, 0, 1, cvs.height);



// function animate() {
//     refreshScreen();
//     boxOne.drawBox();
//     boxOne.gravity();
//     boxOne.moveBox();
//     boxOne.Bounce();
//     boxOne.horizontalMovement();
//     // console.log(boxOne.verticalSpeed);
    
//     window.requestAnimationFrame(animate);
//   }



// eventListen();
// animate();


// function drawLine() {
//   // set line stroke and line width
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = 1;

//   // draw a red line
//   ctx.beginPath();
//   ctx.moveTo(10, 0);
//   ctx.lineTo(10, cvs.height);
//   ctx.stroke();
// }