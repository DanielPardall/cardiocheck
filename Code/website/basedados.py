from .extensions import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime


class Medicos(db.Model, UserMixin):
    __tablename__ = 'medicos'
    cedulapro = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(150))
    contacto = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    password_hash = db.Column(db.String(300))
    
    @property
    def password(self):
        raise AttributeError('A palavra-passe não é um atributo legível')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def get_id(self):
        return str(self.cedulapro)
    
class Utentes(db.Model, UserMixin):
    __tablename__ = 'utentes'
    numutente = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(150))
    nascimento = db.Column(db.String(150))
    sexo = db.Column(db.String(10))
    nic = db.Column(db.String(150))
    morada = db.Column(db.String(150))
    contacto = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    
class Previsoes(db.Model, UserMixin):
    __tablename__ = 'previsoes'
    id = db.Column(db.Integer, primary_key=True)  # chave primaria para cada previsão
    numutente = db.Column(db.Integer, db.ForeignKey('utentes.numutente'), nullable=False)  # chave estrangeira para a tabela de utentes
    previsao = db.Column(db.String(150))
    data_previsao = db.Column(db.Date, default=db.func.current_date())
    