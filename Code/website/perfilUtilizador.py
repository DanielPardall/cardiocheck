from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import current_user, login_required
from sqlalchemy.exc import SQLAlchemyError 
from .extensions import db
from .basedados import Medicos, Utentes

perfil = Blueprint('perfil', __name__)

@perfil.route('/perfil', methods=['GET'])
#@login_required
def perfilUtilizador():
    user = Medicos.query.get(current_user.cedulapro)
    return render_template("perfil.html", user=user)