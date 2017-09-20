from app import db
from app import bcrypt
class Car(db.Model):
	__tablename__ = "car_details"

	car_id = db.Column(db.Integer, primary_key=True)
	longitude = db.Column(db.String,nullable=False)
	latitude = db.Column(db.String,nullable=False)
	speed = db.Column(db.String,nullable=False)
	color_r = db.Column(db.Integer,nullable=False)
	color_g = db.Column(db.Integer,nullable=False)
	color_b = db.Column(db.Integer,nullable=False)
	temp = db.Column(db.String,nullable=False)
	humidity = db.Column(db.String,nullable=False)
	gas = db.Column(db.String,nullable=False)
	def __init__ (self,longitude,latitude,speed,color_r,color_g,color_b,temp,humidity,gas):
		self.longitude = longitude
		self.latitude = latitude
		self.speed=speed
		self.color_r=color_r
		self.color_g=color_g
		self.color_b=color_b
		self.temp = temp
		self.humidity = humidity
		self.gas = gas
		# self.password = bcrypt.generate_password_hash(password)

# class Contest(db.Model):
# 	__tablename__ = "contest"
# 	file_name = db.Column(db.String(20),primary_key=True)
# 	def __init__(self,file_name):
# 		self.file_name=file_name
