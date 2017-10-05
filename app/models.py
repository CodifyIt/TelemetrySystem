from app import db
from app import bcrypt
class Car(db.Model):
	__tablename__ = "car_details"

	car_id = db.Column(db.Integer, primary_key=True,autoincrement=False)
	ch_1 = db.Column(db.String(9))
	ch_2 = db.Column(db.String(9))
	ch_3 = db.Column(db.String(9))
	ch_4 = db.Column(db.String(9))
	ch_5 = db.Column(db.String(9))
	ch_6 = db.Column(db.String(9))
	ch_7 = db.Column(db.String(9))
	ch_8 = db.Column(db.String(9))
	ch_9 = db.Column(db.String(9))
	chh_10 = db.Column(db.String(9))
	total_time = db.Column(db.String(9))
	def __init__ (self,car_id,ch_1,ch_2,ch_3,ch_4,ch_5,ch_6,ch_7,ch_8,ch_9,chh_10,total_time):
		self.car_id = car_id;
		self.ch_1 = ch_1
		self.ch_2 = ch_2
		self.ch_3 = ch_3
		self.ch_4 = ch_4
		self.ch_5 = ch_5
		self.ch_6 = ch_6
		self.ch_7 = ch_7
		self.ch_8 = ch_8
		self.ch_9 = ch_9
		self.chh_10 = chh_10
		self.total_time = total_time

class Parameters(db.Model):
	__tablename__ = "parameters"

	id = db.Column(db.Integer,primary_key=True)
	temp = db.Column(db.String(7))
	humid = db.Column(db.String(7))
	gas = db.Column(db.String(8))
	lon = db.Column(db.String(15))
	lat = db.Column(db.String(15))
	speed = db.Column(db.String(10))
	cr = db.Column(db.String(3))
	cg = db.Column(db.String(3))
	cb = db.Column(db.String(3))
	rt = db.Column(db.String(8))
	bat = db.Column(db.String(3))
	loca = db.Column(db.String(150))

	def __init__(self,t,h,g,lo,la,sp,cr,cg,cb,rt,b,l):
		self.temp = t
		self.humid = h
		self.gas = g
		self.lon = lo
		self.lat = la
		self.speed = sp
		self.cr = cr
		self.cg = cg
		self.cb = cb
		self.rt = rt
		self.bat = 	b
		self.loca = l