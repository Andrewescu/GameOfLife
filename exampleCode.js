var cvs = document.getElementById("gameScreen");
var ctx = cvs.getContext("2d");


cvs.addEventListener("click", function(e) { 
    var cRect = cvs.getBoundingClientRect();        // Gets CSS pos, and width/height
    var cvsX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the cvs 
    var cvsY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make
      
    ctx.font = "16px Arial";
    ctx.clearRect(0, 0, cvs.width, cvs.height);  // (0,0) the top left of the cvs
    ctx.fillText("X: "+cvsX+", Y: "+cvsY, 0, 10);
});

