from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
from flask_bcrypt import Bcrypt
import flask_excel as excel
app = Flask(__name__)
app.config.from_object('config')
bcrypt = Bcrypt(app)
app.secret_key = '\xff}M\xac\xbd#4F\xab\xcc.\x9b\xf3\xa7\xf8\x80x`Yu'
db = SQLAlchemy(app)
excel.init_excel(app)
from app import views, models
