$(document).ready(setInterval(function(){
	$.ajax({
        url: '/getData',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            if(data.res == 'yes'){
                if(String(data.temp) != String('un')){
                    $("#temp").html(data.temp+"℃");
                    window.grph(data.temp);
                }
                if(String(data.humid) != String('un')){
                    $("#humid").html(data.humid+"%");
                }
                if(String(data.gas) != String('un')){
                    $("#gas").html(data.gas);
                }
                if(String(data.lon) != String('un')){
                    $("#lon").html(data.lon);
                }
                if(String(data.lat) != String('un')){
                    $("#lat").html(data.lat);
                }
                if(String(data.speed) != String('un')){
                    $("#speed").html(data.speed);
                }
                if(String(data.cr) != String('un')){
                    $("#cr").html(data.cr);
                }
                if(String(data.cg) != String('un')){
                    $("#cg").html(data.cg);
                }
                if(String(data.cb) != String('un')){
                    $("#cb").html(data.cb);
                }
                if(String(data.rt) != String('un')){
                    $("#r_temp").html(data.rt+"℃");
                }
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