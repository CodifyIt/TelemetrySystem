var angle=48;
if(angle==0){
  var canvas = document.getElementById("mycanvas");
draw(canvas,1);
}
else if(angle==180){
  var canvas = document.getElementById("mycanvas");
draw(canvas,181);
}
else if(angle==270){
  var canvas = document.getElementById("mycanvas");
draw(canvas,271);
}
else if(angle==360){
  
  var canvas = document.getElementById("mycanvas");
draw(canvas,259);
}

else if(angle!=360 || angle!=0 || angle!=180 || angle!=270){
  
  var canvas = document.getElementById("mycanvas");
draw(canvas,angle);
}
function draw(canvas, angle){
    var context = canvas.getContext('2d'), centerX = Math.floor(canvas.width / 2), centerY = Math.floor(canvas.height / 2),radius = Math.floor(canvas.width / 2);
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    var begin = 0; interval = 90;
    var arcSize= degreesToRadians(interval);
    context.beginPath();
    context.moveTo(centerX,centerY);
    context.arc(centerX,centerY,radius, degreesToRadians(0), degreesToRadians((-1) * angle),false);
    context.closePath();
    context.stroke();
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    for(var startingAngle=begin; startingAngle < 360;){
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(centerX, centerY, radius, degreesToRadians(startingAngle), startingAngle + arcSize, false);
        context.closePath();
        context.stroke();
        startingAngle = startingAngle + interval;
    }
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}