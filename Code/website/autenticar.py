from flask import Blueprint, redirect, render_template, request, jsonify, url_for
from werkzeug.security import check_password_hash
from sqlalchemy.exc import SQLAlchemyError
from .basedados import Medicos
from .extensions import db
from flask_login import current_user, login_user

autenticar = Blueprint('autenticar', __name__)

@autenticar.route('/home', methods=['GET'])
def home():
    return render_template('pagInicial.html') 

@autenticar.route('/login', methods=['POST'])
def login_utilizador():
    try:
        email = request.form['login-email']
        password = request.form['login-password']

        utilizador = Medicos.query.filter_by(email=email).first()

        if utilizador and check_password_hash(utilizador.password_hash, password):
            login_user(utilizador, remember=True, force=True)
            return jsonify({'mensagem': 'Login bem sucedido!', 'redirect': url_for('utentes.home')}), 200
        else:
            return jsonify({'mensagem': 'E-mail ou palavra-passe incorretos!'}), 401
    
    except SQLAlchemyError as e:
        return jsonify({'mensagem': 'Erro interno do servidor: ' + str(e)}), 500

@autenticar.route('/register', methods=['POST'])
def registar_utilizador():
    try:
        full_name = request.form['full-name']
        professional_id = int(request.form['professional-id'])
        email = request.form['email']
        phone = request.form['phone']
        password = request.form['password']

        usuario_existente = Medicos.query.filter_by(email=email).first()
        if usuario_existente:
            return jsonify({'mensagem': 'O e-mail inserido já se encontra registado!'}), 400

        usuario_existente = Medicos.query.filter_by(cedulapro=professional_id).first()
        if usuario_existente:
            return jsonify({'mensagem': 'O número de cédula profissional já se econtra registado!'}), 400
        
        novo_utilizador = Medicos(cedulapro=professional_id, nome=full_name, contacto=phone, email=email)
        novo_utilizador.password = password  
        db.session.add(novo_utilizador)
        db.session.commit()
        return jsonify({'mensagem': 'Registado com sucesso!'}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'mensagem': 'Erro ao registrar utilizador: ' + str(e)}), 500
    finally:
        db.session.close()