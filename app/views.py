from flask import render_template, request,flash, redirect, url_for,session, jsonify
from app import app, db
from sqlalchemy import desc
from app.models import *
import datetime 
import os,time
import json
import random
import flask_excel as excel
import requests
from itertools import cycle
import string
from app.models import *

@app.route('/' )
def index():
	return render_template("index.html")
@app.route('/data',methods=['POST','GET'])
def data():
	js_obj = {}
	if(request.method=="GET"):			
		js_obj['lon'] = request.args.get('lon')
		js_obj['lat'] = request.args.get('lat')
		js_obj['speed'] = request.args.get('speed')
		js_obj['c_r'] = request.args.get('c_r')
		js_obj['c_g'] = request.args.get('c_g')
		js_obj['c_b'] = request.args.get('c_b')
		js_obj['gas'] = request.args.get('gas')
		print "I was get"
	else:
		js_obj = request.data
		js_obj = json.loads(js_obj)
	 	print "1st : ",request.data
		print "I was post"
	try:
		lon = str(js_obj['lon'])
	except KeyError:
		lon='un'
	try:
		lat = str(js_obj['lat'])
	except KeyError:
		lat='un'
	try:
		speed = str(js_obj['speed'])
	except KeyError:
		speed='un'
	try:
		color_r = js_obj['c_r']
	except KeyError:
		color_r='un'
	try:
		color_g = js_obj['c_g']
	except KeyError:
		color_g='un'
	try:
		color_b = js_obj['c_b']
	except KeyError:
		color_b='un'
	try:
		gas = str(js_obj['gas'])
	except KeyError:
		gas='un'
	try:
		rt = js_obj['r_temp']
		print "rt",js_obj['r_temp']
	except KeyError:
		rt='un'
	try:
		bat = js_obj['bat']
	except KeyError:
		bat='un'
	temp = "un"
	humidity = "un"
	location = 'un'
	if lat!='un' and lon!='un':
		par = {'lat':float(lat),'lon':float(lon),'units':'metric','APPID':'3eb103db203fb263e200a7a1d09488d9'}
		r = requests.get("https://api.openweathermap.org/data/2.5/weather",params=par)
		detail = json.loads(r.text)
		temp = detail['main']['temp']
		humidity = detail['main']['humidity']
		latlong = ""+str(lat)+","+str(lon)
		par = {'latlng':latlong, 'key' : 'AIzaSyA4Uu7BQ56PUvaAvZ9JtHXN0t3WiwTNLhY '} 
		r = requests.get("https://maps.googleapis.com/maps/api/geocode/json",params=par)
		detail = json.loads(r.text)
		location = detail['results'][0]['address_components'][1]["long_name"] +\
		 "," + detail['results'][0]['address_components'][2]["long_name"]+\
		 ","+detail['results'][0]['address_components'][4]["short_name"]
		print "temp : ",temp,"C"
		print "humidity ",humidity,"%"
	data = Parameters(temp,humidity,gas,lon,lat,speed,color_r,color_g,color_b,rt,bat,location)
	db.session.add(data)
	db.session.commit()
	return jsonify(temp=temp,humid=humidity,location=location)

@app.route('/getData',methods=['GET'])
def getData():
	result = Parameters.query.first()
	if(result == None):
		return jsonify(res="no")
	obj = jsonify(res="yes",temp=result.temp,humid=result.humid,\
		gas=result.gas,lon=result.lon,lat=result.lat,speed=result.speed,\
		cr=result.cr,cg=result.cg,cb=result.cb,rt=result.rt,\
		bat=result.bat,loca=result.loca)
	db.session.delete(result)
	db.session.commit()
	return obj

@app.route('/store', methods=['POST'])
def store():
	ans = "Successful"
	try:
		js_obj = request.data
		js_obj = json.loads(js_obj)	
		car_id = js_obj['car_id']
		ch_1 = js_obj['ch_1']
		ch_2 = js_obj['ch_2']
		ch_3 = js_obj['ch_3']
		ch_4 = js_obj['ch_4']
		ch_5 = js_obj['ch_5']
		ch_6 = js_obj['ch_6']
		ch_7 = js_obj['ch_7']
		ch_8 = js_obj['ch_8']
		ch_9 = js_obj['ch_9']
		ch_10 = js_obj['ch_10']
		total_time = js_obj['total_time']
		car_in_db = Car.query.filter_by(car_id=str(car_id)).first()
		if car_in_db != None:
			Car.query.delete()
		data = Car(car_id,ch_1,ch_2,ch_3,ch_4,ch_5,ch_6,ch_7,ch_8,ch_9,ch_10,total_time)
		db.session.add(data)
		db.session.commit()
	except Exception:
		ans = "Unsuccessful"
	return jsonify(response = ans)

@app.route("/export", methods=['GET'])
def export_records():
    return excel.make_response_from_tables(db.session, [Car], "xls")

@app.route("/handson_view", methods=['GET'])
def handson_table():
    return excel.make_response_from_tables(db.session, [Car], 'handsontable.html')

@app.route('/tryData')
def tryData():
	return "Got the following data : " + str(request.data)