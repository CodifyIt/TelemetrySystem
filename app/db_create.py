from app import db
from models import Car

db.create_all()
db.session.commit()