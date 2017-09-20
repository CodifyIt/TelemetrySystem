function val(){
	return new Date(new Date()).toString().split(' ')[4];
}
var xx=[val()];
var yy=[0];
	TESTER = document.getElementById('tester');
function graph(){
	Plotly.plot( TESTER, [{
	    x: xx,
	    y: yy }], 
	    { margin: { t: 0 },
	    paper_bgcolor:'rgba(0,0,0,0)',
	    plot_bgcolor:'rgba(0,0,0,0)'
	     });

	/* Current Plotly.js version */
	console.log( Plotly.BUILD );	
}

window.grph = function(data){
	// var temp = document.getElementById('temp');

	if(xx.length <20)
	{
	Plotly.purge(TESTER);
	xx.push(val());
	yy.push(data);
	graph();
}
	else
	{
	Plotly.purge(TESTER);
	xx=xx.slice(1,10);
	yy=yy.slice(1,10);	
	xx.push(val());
	yy.push(data);
	graph();
	}
};