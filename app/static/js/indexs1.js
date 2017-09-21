function animateSVG(battery){
  var circle = document.getElementById('circle');
  var radius = circle.getAttribute('r');
  var cc = Math.PI*(radius*2);
  circle.style.strokeDashoffset = cc;


function ani(val){
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    var points = (( 100-val )/ 100)*cc;
    circle.style.strokeDashoffset = points;
}
  setTimeout(function(){ ani(battery); },0);
  document.getElementById('text').textContent = battery + '%';
}

animateSVG(80); //battery percent

//button
document.getElementById('enter').addEventListener('click',function(){
  var percent = prompt('Enter a number from 0 - 100','');
  animateSVG(percent);
});