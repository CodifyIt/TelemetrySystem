$(document).ready(setInterval(function(){
	$.ajax({
        url: '/getData',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            if(data.res == 'yes'){
                change(data);
                if(String(data.temp) != String('-1')){
                    $("#temp").html(data.temp+"℃");
                    window.grph(data.temp);
                }
                if(String(data.humid) != String('-1')){
                    $("#humid").html(data.humid+"%");
                }
                if(String(data.gas) != String('-1')){
                    $("#gas").html(data.gas);
                }
                if(String(data.lon) != String('-1')){
                    $("#lon").html(data.lon);
                }
                if(String(data.lat) != String('-1')){
                    $("#lat").html(data.lat);
                }
                if(String(data.speed) != String('-1')){
                    $("#speed").html(data.speed);
                }
                $("#cr").html(data.cr);
                $("#cg").html(data.cg);
                $("#cb").html(data.cb);
                $("#r_temp").html(data.rt+"℃");
                // if(data.bat != 'un'){
                //     $("#battery").attr('data-percent',Math.floor(Math.random()*100))
                // }
                if(data.loca != 'un'){
                    $("#y1").html(data.loca)
                }             
            }
        }
    });
},1000));