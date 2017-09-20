from flask import render_template, request,flash, redirect, url_for,session, jsonify
from app import app, db
from sqlalchemy import desc
from app.models import *
import datetime 
import os,time
import json
import random
import requests
from itertools import cycle
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
	lon = str(js_obj['lon'])
	lat = str(js_obj['lat'])
	speed = str(js_obj['speed'])
	color_r = js_obj['c_r']
	color_g = js_obj['c_g']
	color_b = js_obj['c_b']
	gas = str(js_obj['gas'])
	print lon, lat, speed, color_r, color_g, color_b, gas
	temp = ""
	humidity = ""
	user = Car.query.order_by(desc(Car.car_id)).first()
	if user==None or str(user.longitude) != str(lon) or str(user.latitude) != str(lat):
		par = {'lat':float(lat),'lon':float(lon),'units':'metric','APPID':'3eb103db203fb263e200a7a1d09488d9'}
		r = requests.get("https://api.openweathermap.org/data/2.5/weather",params=par)
		detail = json.loads(r.text)
		temp = detail['main']['temp']
		humidity = detail['main']['humidity']
		data = Car(lon, lat, speed, color_r, color_g, color_b, temp,humidity, gas)
		db.session.add(data)
		db.session.commit()
	else:
		temp = str(user.temp)
		humidity = str(user.humidity)
	print "temp : ",temp,"C"
	print "humidity ",humidity,"%"
	return jsonify(temp=temp,humid=humidity)

# def login_required(f):
# 	@wraps(f)
# 	def wrap(*args,**kwargs):
# 		if 'logged_in' in session:
# 			return f(*args,**kwargs)
# 		else:
# 			flash('You need to login first')
# 			return redirect(url_for('beforelogin'))
# 	return wrap

# @app.route('/register',methods=['POST','GET'])
# def reg():
# 	if request.method=="POST":
# 		user = Leaderboard.query.filter_by(username=js_obj['username']).first()
# 		print user
# 		if user==None:
# 			if(js_obj['password'] ==js_obj['password-check']):
# 				a=Leaderboard(js_obj['username'],js_obj['email'],0,js_obj['password'])
# 				db.session.add(a)
# 				db.session.commit()
# 				return redirect(url_for('index'))
# 			else:	
# 				flash("Passwords do not match")
# 		else:
# 			flash("Username already exists")	
# 	return render_template('page-register.html')		
# @app.route('/login',methods=['POST','GET'])
# def login():
# 	if request.method=="POST":
# 		user = Leaderboard.query.filter_by(username=js_obj['username']).first()
# 		print user
# 		if user == None:
# 			flash("You are not registtered")
# 		else:
# 			if bcrypt.check_password_hash(user.password, js_obj['password']) == False:
# 				flash('Password is wrong')
# 			else:
# 				session['logged_in'] = True
# 				flash('Logged in successfully')
# 				return render_template("bathroom.html")
# 	return render_