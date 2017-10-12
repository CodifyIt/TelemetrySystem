$(document).ready(function() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
   var ca; 
// set starting values
var speed=20;
var fps = 2*speed;
var percent = 0
var direction = 1;
var chang;
window.chang=0;
var b=0;
var cc; 
var numc;
window.numc=0;
var check = 0;
var tim = 0;
var saka;
window.saka=undefined;
var a=undefined;
var mili=0,seconds=0,minu=0;
// start the animation
animate();
var time,ti,hr,sec,min;
window.distance = 0;
document.getElementById('q9').innerHTML = window.distance;
window.time = undefined;
window.avant = function(){
    if(window.time == undefined){
        window.time = setInterval(function(){
            tim+=1;
            ti = tim;
            hr = Math.floor(ti/3600);
            ti -= hr*3600;
            min = Math.floor(ti/60);
            ti -= min*60;
            if(hr < 10){

            document.getElementById('hrs').innerHTML = '0'+hr;
            }
            else{

            document.getElementById('hrs').innerHTML = hr;
            }
            if(min < 10){

            document.getElementById('min').innerHTML = '0'+min;
            }
            else{

            document.getElementById('min').innerHTML =min;
            }
            if(sec < 10){
            document.getElementById('sec').innerHTML = '0'+ti;
            }
            else{

            document.getElementById('sec').innerHTML = ti;
            }
        },1000);
    }
    else{
        clearInterval(window.time);
        window.time = undefined;
        tim = 0;
    }
}
/*window.s = function(){


    var a=setInterval(function()
    {
        b+=.01;
    },10);

}
*/
window.s=function()
{    

if(window.a==undefined)
{
window.numc+=1;
document.getElementById('hh3').innerHTML=window.numc; 
window.a=setInterval(function () {
    b+=.01;
    },10);
     document.getElementById('ps1').innerHTML='00:00:00';
     document.getElementById('ps2').innerHTML='00:00:00';
     document.getElementById('ps3').innerHTML='00:00:00';
     document.getElementById('ps4').innerHTML='00:00:00';
     document.getElementById('ps5').innerHTML='00:00:00';
     document.getElementById('ps6').innerHTML='00:00:00';
     document.getElementById('ps7').innerHTML='00:00:00';
     document.getElementById('ps8').innerHTML='00:00:00';
     document.getElementById('ps9').innerHTML='00:00:00';
     document.getElementById('ps10').innerHTML='00:00:00'; 
}
else
{
    clearInterval(window.a);
    window.a=undefined;
    percent=0;
    b=0;
}
}
window.coun=0;
function animate() {

    window.distance +=.5;
    if(window.chang%speed==0)
    document.getElementById('q9').innerHTML = window.distance;
    percent += .1;
    window.chang++;
  var c=percent.toFixed(0);
console.log(c);
    if(c == 4)
    document.getElementById('q8').innerHTML = 1;
if(c == 11)
    document.getElementById('q8').innerHTML = 2;
if(c== 17)
    document.getElementById('q8').innerHTML = 3;
if(c == 25)
    document.getElementById('q8').innerHTML = 4;
if(c== 32)
    document.getElementById('q8').innerHTML = 5;
if(c == 39)
    document.getElementById('q8').innerHTML = 6;
if(c == 46)
    document.getElementById('q8').innerHTML = 7;
if(c == 61)
    document.getElementById('q8').innerHTML = 8;
if(c == 71)
    document.getElementById('q8').innerHTML = 9;
if(c == 80)
    document.getElementById('q8').innerHTML = 10;
   
    if(c==8)
    {
        ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
             if(isNaN(minu))
            minu='0';
        if(isNaN(seconds))
            seconds='0';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps1').innerHTML=minu+':'+seconds+':'+mili;
    }  
    if(c==13)
    {

            ca=b.toFixed(2);
          mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
               if(isNaN(minu))
            minu='0';
        if(isNaN(seconds))
            seconds='0';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps2').innerHTML=minu+':'+seconds+':'+mili;
    }
      if(c==20)
    {
            ca=b.toFixed(2);
                mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
        seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
           if(isNaN(minu))
            minu='0';
        if(isNaN(seconds))
            seconds='0';   
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps3').innerHTML=minu+':'+seconds+':'+mili;
    }
       if(c==43){
                ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
        if(minu==undefined)
            minu='00';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps4').innerHTML=minu+':'+seconds+':'+mili;
       console.log("asd"); 
    }
    if(c==53){
        ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
        if(minu==undefined)
            minu='00';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
       console.log("asd");
        document.getElementById('ps5').innerHTML=minu+':'+seconds+':'+mili;
        }
     
    if(c==58){
ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
        if(minu==undefined)
            minu='00';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps6').innerHTML=minu+':'+seconds+':'+mili;
 
    }
    if(c==64){
                ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
        if(minu==undefined)
            minu='00';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps7').innerHTML=minu+':'+seconds+':'+mili;
    }
    if(c==70){
        ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
        if(minu==undefined)
            minu='00';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps8').innerHTML=minu+':'+seconds+':'+mili;
               }
           if(c==80){
        ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
        if(minu==undefined)
            minu='00';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps9').innerHTML=minu+':'+seconds+':'+mili;
            }
    if(c==100)
    {
    ca=b.toFixed(2);
            mili=(ca-parseInt(ca))*100;
            mili=mili.toFixed(0);
            seconds=parseInt(ca);
            minu = Math.floor(seconds/60);
            seconds -= minu*60;
        if(minu==undefined)
            minu='00';
        if(minu<10)
        minu='0'+minu;
          if(mili<10)
        mili='0'+mili;
          if(seconds<10)
        seconds='0'+seconds;    
        document.getElementById('ps10').innerHTML=minu+':'+seconds+':'+mili;
       
    }
    if(c==100 ){        
        window.coun+=1;
        document.getElementById('ts12').innerHTML=window.coun;
    }

    if (percent < 0) {
        percent = 0;
        direction = 1;
    };
    if (percent > 100) {
        percent = 0;
        direction = 1;
    };

    draw(percent);
}

window.sm=function()
{  

if(window.ca==undefined)
{
    window.saka=0;
window.ca=setInterval(function () {
        requestAnimationFrame(animate);
    }, 1000 / fps);
            document.getElementById('sec').innerHTML = '00';
                        document.getElementById('hrs').innerHTML ='00'; 
                                    document.getElementById('min').innerHTML ='00'; 

}
else
{
    clearInterval(window.ca);
    clearInterval(window.cc);
    window.ca=undefined;
    window.saka=9;
}
return;
}
window.resume=function()
{  
if(window.saka==1)
{
window.cc=setInterval(function () {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}

window.saka=0;
}
window.pause=function()
{
if(window.saka==0)
{
    clearInterval(window.cc);
    clearInterval(window.ca);
    window.ca=1;

    window.saka=1;
    /*percent=0;*/
}
}

// draw the current frame based on sliderValue
function draw(sliderValue) {

    // redraw path
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 5;

    ctx.beginPath();                // straight line neeche wali
    ctx.moveTo(70, 260);              //1st
    ctx.lineTo(340, 260);
    ctx.strokeStyle = 'gray';
    ctx.stroke();


 

// here




  ctx.beginPath();                   //straight line uper wali
    ctx.moveTo(70 , 100);
    ctx.lineTo(340, 100);               //2nd
    ctx.strokeStyle = 'gray';
    ctx.stroke();


ctx.beginPath();                               // left arc
ctx.arc(85,180, 81, 0.5*Math.PI, 1.5*Math.PI);
        //ctx.lineWidth = 5;
        ctx.fillStyle = 'grey';
   ctx.stroke();




   ctx.beginPath();                               // right arc
ctx.arc(340,180, 81, 0.5*Math.PI, 1.5*Math.PI,true);
        //ctx.lineWidth = 5;
        ctx.fillStyle = 'grey';
   ctx.stroke();


    ctx.beginPath();
ctx.arc(420,180, 10, 0, 2 * Math.PI, false);         //1st hai shayad
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

 ctx.beginPath();
ctx.arc(260,260, 10, 0, 2 * Math.PI, false);   //left se 2nd
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();


    ctx.beginPath();
ctx.arc(190,260, 10, 0, 2 * Math.PI, false);   //left se 3rd
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

     ctx.beginPath();
ctx.arc(120,260, 10, 0, 2 * Math.PI, false);   //left se 4th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

     ctx.beginPath();
ctx.arc(340,260, 10, 0, 2 * Math.PI, false);   //left se 1st neeche wali line
        ctx.lineWidth = 5;
        ctx.fillStyle = 'red';
   ctx.fill();

       ctx.beginPath();
ctx.arc(14,140, 10, 0, 2 * Math.PI, false);   //top-left se 1st
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

      ctx.beginPath();
ctx.arc(120,100, 10, 0, 2 * Math.PI, false);   //top-left se 2nd
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();


    ctx.beginPath();
ctx.arc(190,100, 10, 0, 2 * Math.PI, false);   //top-left se 3rd
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();


    ctx.beginPath();
ctx.arc(260,100, 10, 0, 2 * Math.PI, false);   //left se 4th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();






           ctx.beginPath();
ctx.arc(340,100, 10, 0, 2 * Math.PI, false);   //left se 5th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();



 /*  ctx.beginPath();
    ctx.moveTo(240, 260); 
     //ctx.lineTo(200,260);  //here
    ctx.lineTo(100, 260);               //3rd
    ctx.strokeStyle = 'gray';
    ctx.stroke();

     ctx.beginPath();
ctx.arc(100,260, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

    ctx.beginPath();
    ctx.moveTo(100, 260);  //here
    //ctx.moveTo(10, 260);
    ctx.arcTo(10,40, 79, 40, 40);
   // ctx.quadraticCurveTo(230, 200, 250, 120);    //4th
    ctx.strokeStyle = 'gray';
    ctx.stroke();


ctx.beginPath();
ctx.arc(10,260, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250, 120);
    ctx.bezierCurveTo(290, -40, 300, 200, 400, 150);  //7th
    ctx.strokeStyle = 'gray';
    ctx.stroke();


ctx.beginPath();
ctx.arc(250,120, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

ctx.beginPath();
ctx.arc(200,180, 10, 0, 2 * Math.PI, false);   //6th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

ctx.beginPath();
ctx.arc(100,230, 10, 0, 2 * Math.PI, false);   //5th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();



ctx.beginPath();
ctx.arc(290,80, 10, 0, 2 * Math.PI, false);   //8th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();
 
ctx.beginPath();
ctx.arc(330,140, 10, 0, 2 * Math.PI, false);   //9th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();


//done
    ctx.beginPath();
    ctx.moveTo(400, 150);
    ctx.lineTo(370, 260);
    ctx.strokeStyle = 'gray';        //10th
    ctx.stroke();


ctx.beginPath();
ctx.arc(400,150, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();*/

    // draw the tracking rectangle
    var xy;

        if (sliderValue < 25) {
        var percent = sliderValue / 24;
        xy = getLineXYatPercent({
            x: 340,
            y: 260
        }, {
            x: 60,
            y: 260
        }, percent);
    } else if (sliderValue < 50) {
        var percent = (sliderValue - 25) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 45,
            y: 260
        }, {
            x: -27,
            y: 200
        }, {
            x: 60,
            y: 100
        }, percent);
    } else if (sliderValue < 75) {
        var percent = (sliderValue - 50) / 24
         xy = getLineXYatPercent({
            x: 60,
            y: 100
        }, {
            x: 392,
            y: 106
        },percent);
    }
     else {
        var percent = (sliderValue - 75) / 25
        xy = getQuadraticBezierXYatPercent({
            x: 399,
            y: 126
        }, {
            x: 450,
            y: 210
        },
        {
           x: 340,
           y:260
        },percent);

    }
    drawRect(xy, "red");



}


// draw tracking rect at xy
function drawRect(point, color) {
    ctx.fillStyle = "cyan";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(point.x - 13, point.y - 8, 25, 15);
    ctx.fill();
    ctx.stroke();
}

// draw tracking dot at xy
function drawDot(point, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// line: percent is 0-1
function getLineXYatPercent(startPt, endPt, percent) {
    var dx = endPt.x - startPt.x;
    var dy = endPt.y - startPt.y;
    var X = startPt.x + dx * percent;
    var Y = startPt.y + dy * percent;
    return ({
        x: X,
        y: Y
    });
}

// quadratic bezier: percent is 0-1
function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
    var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
    var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
    return ({
        x: x,
        y: y
    });
}

// cubic bezier percent is 0-1
function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
    var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
    var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
    return ({
        x: x,
        y: y
    });
}

// cubic helper formula at percent distance
function CubicN(pct, a, b, c, d) {
    var t2 = pct * pct;
    var t3 = t2 * pct;
    return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
}

});