from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import current_user
from website.basedados import Medicos
from . import db
from sqlalchemy.exc import SQLAlchemyError 


guardarPerfilUtilizador = Blueprint('guardarPerfilUtilizador', __name__)

@guardarPerfilUtilizador.route('/guardarPerfilUtilizador', methods=['POST'])
def editar_perfil():
    try:
     
        nome = request.form.get('nome')
        contacto = request.form.get('contacto')
        email = request.form.get('email')

        utilizador = Medicos.query.get(current_user.cedulapro) # Obtém o utilizador pela cédula profissional
        if (utilizador):
            utilizador.nome = nome
            utilizador.contacto = contacto
            utilizador.email = email
            db.session.commit()  # Guarda as alterações na base de dados

        #return redirect(url_for('perfil.perfilUtilizador'))
        return jsonify({'mensagem': 'Registado com sucesso!','redirect': url_for('perfil.perfilUtilizador')}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'mensagem': 'Erro ao registrar utilizador: ' + str(e)}), 500
    finally:
        db.session.close()
    


