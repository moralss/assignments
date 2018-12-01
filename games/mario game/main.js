let canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";    
// ctx.fillRect(25, 25, 25, 25);
// ctx.fillStyle = "blue";    
// ctx.fillRect(50, 50, 25, 25);
// ctx.fillStyle = "green";    
// ctx.fillRect(75, 75, 25, 25);

ctx.beginPath();
ctx.moveTo(20 , 50);
ctx.lineTo(50 , 50);
ctx.lineTo(50 , 50);
ctx.storkeWidth = '22px';
ctx.strokeStyle = "red";
ctx.stroke();

