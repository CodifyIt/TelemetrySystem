var stDiv = document.getElementById('sama');
var dataPercent = stDiv.getAttribute('data-percent');
var styleAfter = parseInt(window.getComputedStyle(stDiv, ':after').width);

var width = styleAfter*dataPercent/100;
stDiv.insertAdjacentHTML('afterend', '<style>#sama::after{width:' + width + 'px;}</style>');

if (dataPercent < 50 && dataPercent >= 11 ) {
	stDiv.setAttribute('orange','');
} else if (dataPercent <= 10) {
  stDiv.setAttribute('red','');
}