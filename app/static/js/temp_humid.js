$(document).ready(setInterval(function(){
	// $(document).on('input','#Input',function(){
	// 	$('#dispMsg').load('http://localhost:5000/foody'+$(#Input).val());	
	// });
	// $SCRIPT_ROOT = {{ request.script_root|tojson|safe }};
    var long = ((Math.floor(Math.random()*1000)%180)+1) + Math.random();
    var lati = ((Math.floor(Math.random()*100)%90)+1) + Math.random();
    var color_r = Math.floor(Math.random()*1000)%256;
    var color_g = Math.floor(Math.random()*1000)%256;
    var color_b = Math.floor(Math.random()*1000)%256;
    var spd = Math.floor(Math.random()*1000)%256;
    var gas = Math.floor(Math.random()*100);
    var r_temp = Math.floor(Math.random()*100)%10;
	$.ajax({
        url: '/data',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            lon: long,
            lat: lati,
            speed: spd,
            c_r: color_r,
            c_g: color_g,
            c_b: color_b,
            gas: gas
        }),
        dataType: 'json',
        success: function(data){

	        $("#temp").html("<style='color: white;'>"+data.temp+"℃");
            window.grph(data.temp);
            $("#humid").html("<style='color: white;'>"+data.humid+"%");
            $("#gas").html("<style='color: white;'>"+gas);
            $("#lon").html("<style='color: white;'>"+long.toFixed(2));
            $("#lat").html("<style='color: white;'>"+lati.toFixed(2));
            $("#speed").html("<style='color: white;'>"+spd);
            $("#cr").html("<style='color: white;'>"+color_r+" ");
            $("#cg").html("<style='color: white;'>"+color_g+" ");
	        $("#cb").html("<style='color: white;'>"+color_b);
            $("#r_temp").html("<style='color: white;'>"+Math.floor(Math.random()*100)+"℃");
            $("#battery").attr('data-percent',Math.floor(Math.random()*100))
        }
    });
},2000));