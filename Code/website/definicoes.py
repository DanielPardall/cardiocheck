from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import current_user, login_required, logout_user
from sqlalchemy.exc import SQLAlchemyError 
from .extensions import db
from .basedados import Medicos
from werkzeug.security import generate_password_hash, check_password_hash

definicoes = Blueprint('definicoes', __name__)

@definicoes.route('/definicoes', methods=['GET'])
def home():
    return render_template("definicoes.html", user=current_user)

@definicoes.route('/alterarPass',methods=['GET', 'POST'])
#@login_required
def alterar_pass():
    if request.method == 'POST':
        try:
            password_atual = request.form['password']
            password_nova = request.form['new-password']

            user = current_user

            if not check_password_hash(user.password_hash, password_atual):
                return jsonify({'mensagem': 'Palavra-Passe incorreta'}), 400

            user.password_hash = generate_password_hash(password_nova)
            db.session.commit()

            return jsonify({'mensagem': 'Palavra-Passe alterada com sucesso'}), 200
            
        except SQLAlchemyError as e:
            db.session.rollback()
            return jsonify({'mensagem': 'Erro ao atualizar palavra-passe: ' + str(e)}), 500

    return render_template('alterarPass.html', user=current_user)

@definicoes.route('/logout', methods=['GET'])
#@login_required
def logout():
    logout_user()
    return jsonify({'mensagem': 'Sessão encerrada com sucesso!', 'redirect': url_for('autenticar.home')}), 200

@definicoes.route('/eliminar_conta', methods=['POST'])
#@login_required
def eliminar():
    Medicos.query.filter_by(cedulapro=current_user.get_id()).delete()
    db.session.commit()
    logout_user()
    return jsonify({'mensagem': 'Conta eliminada com sucesso!', 'redirect': url_for('autenticar.home')}), 200