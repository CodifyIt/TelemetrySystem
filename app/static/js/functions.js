function star() {
    'use strict';
    
	$('.countdown').final_countdown({
        'start': 1362139200,
        'end': 1388461320,
        'now': 1387461319        
    });
}
function sam()
{
sm();
}
function changeState() {
    var change = document.getElementById("start_stop");
    if (change.innerHTML == "Stop")
    {
        change.innerHTML = "Start";
    }
    else{
        change.innerHTML="Stop";
    } 

}

function sendValues(){
    if(document.getElementById("start_stop").innerHTML == "Stop"){
        document.getElementById('ts12').innerHTML = 0; 
        document.getElementById('q9').innerHTML = 0;
        window.distance = -1;
        window.coun = 0;
        var car_id = document.getElementById('hh3').innerHTML;
        var ch_1 = document.getElementById('ps1').innerHTML;
        var ch_2 = document.getElementById('ps2').innerHTML;
        var ch_3 = document.getElementById('ps3').innerHTML;
        var ch_4 = document.getElementById('ps4').innerHTML;
        var ch_5 = document.getElementById('ps5').innerHTML;
        var ch_6 = document.getElementById('ps6').innerHTML;
        var ch_7 = document.getElementById('ps7').innerHTML;
        var ch_8 = document.getElementById('ps8').innerHTML;
        var ch_9 = document.getElementById('ps9').innerHTML;
        var ch_10 = document.getElementById('ps10').innerHTML;
        var total_time = document.getElementById('hrs').innerHTML + ":" + document.getElementById('min').innerHTML + ":" + document.getElementById('sec').innerHTML;
        $.ajax({
            url: '/store',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                car_id : car_id,
                ch_1 : ch_1,
                ch_2 : ch_2,
                ch_3 : ch_3,
                ch_4 : ch_4,
                ch_5 : ch_5,
                ch_6 : ch_6,
                ch_7 : ch_7,
                ch_8 : ch_8,
                ch_9 : ch_9,
                ch_10 : ch_10,
                total_time : total_time
            }),
            dataType: 'json'
        });
    }
}
