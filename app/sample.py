import requests
lon = ''
lat = ''
speed = ''
gas = ''
temp = ''
data = {'lon' : lon, 'lat' : lat, 'speed' : speed, 'gas' : gas, 'temp' : temp}
requets.post("telemetrysystem.herokuapp.com/data",jason=data)