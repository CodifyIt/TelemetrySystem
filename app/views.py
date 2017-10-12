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
from sqlalchemy import func
from app.models import *

@app.route('/' )
def index():
	return render_template("index.html")
@app.route('/data',methods=['POST','GET'])
def data():
	temp = "un"
	humidity = "un"
	location = 'un'
	if request.method == 'POST':	
		js_obj = {}
		js_obj = request.data
		js_obj = json.loads(js_obj)
		try:
			lon = str(js_obj['lon'])
		except KeyError:
			lon='-1'
		try:
			lat = str(js_obj['lat'])
		except KeyError:
			lat='-1'
		try:
			speed = str(js_obj['speed'])
		except KeyError:
			speed='-1'
		try:
			color_r = js_obj['c_r']
		except KeyError:
			color_r='127'
		try:
			color_g = js_obj['c_g']
		except KeyError:
			color_g='127'
		try:
			color_b = js_obj['r_b']
		except KeyError:
			color_b='127'
		try:
			gas = str(js_obj['gas'])
		except KeyError:
			gas='-1'
		try:
			rt = js_obj['r_temp']
		except KeyError:
			rt='20'
		try:
			bat = js_obj['bat']
		except KeyError:
			bat='50'
		if lat!='-1' and lon!='-1':
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
	rows = db.session.query(func.count(Parameters.id)).scalar()
	if(rows == 0):
		return jsonify(res="no")
	result = Parameters.query.first()
	obj = jsonify(res="yes",temp=result.temp,humid=result.humid,\
		gas=result.gas,lon=result.lon,lat=result.lat,speed=result.speed,\
		cr=result.cr,cg=result.cg,cb=result.cb,rt=result.rt,\
		bat=result.bat,loca=result.loca)
	if rows != 1:
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

@app.route("/mapview", methods=['GET'])
def mapview():
    return render_template('mapview.html')
@app.route('/tryData', methods=['POST','GET'])
def tryData():
	if request.method == 'POST':
		jo = json.loads(request.data)
		lat = 'u'
		lon = 'u'
		try:
			lat = str(jo['lat'])
		except KeyError:
			lat = 'err'
		try:
			lon = str(jo['lon'])
		except KeyError:
			lon = "err"
		data = Parameters('u','u','u',lon,lat,'u','u','u','u','u','u','POST')
		db.session.add(data)
		db.session.commit()
		return "[POST REQ] lat : " + lat + "  lon : " + lon
	data = Parameters('u','u','u','u','u','u','u','u','u','u','u','GET')
	db.session.add(data)
	db.session.commit()
	return "[GET] lat : " + str(request.args.get('lat')) + "  lon : " + str(request.args.get('lon')) 