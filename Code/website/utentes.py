from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import current_user, login_required
from sqlalchemy.exc import SQLAlchemyError 
from . import db
from .basedados import Utentes

utentes = Blueprint('utentes', __name__)

@utentes.route('/utentes', methods=['GET'])
#@login_required
def home():
    return render_template("utentes.html", user=current_user)



@utentes.route('/pesquisar-utente', methods=['POST'])
def pesquisar_utente():
    data = request.get_json()
    num_utente = data['numutente']
    utente = Utentes.query.filter_by(numutente=num_utente).first()
    if utente:
        return jsonify({'nome': utente.nome, 'numutente': utente.numutente})
    else:
        return jsonify({'error': 'Utente não encontrado'}), 404


@utentes.route('/registoutente',methods=['GET', 'POST'])
#@login_required
def registo_utente():
    if request.method == 'POST':
        try:
    
            numutente = request.form['num_saude']
            nome = request.form['nome-completo']
            nascimento = request.form['data-nascimento']
            sexo = request.form['sexo']
            nic = request.form['nic']
            morada = request.form['morada']
            contacto = request.form['contacto']
            email = request.form['email']

            utente_existente = Utentes.query.filter_by(numutente=numutente).first()
            if utente_existente:
                return jsonify({'mensagem': 'O número de utente já está registado!'}), 400

            utente_existente = Utentes.query.filter_by(email=email).first()
            if utente_existente:
                return jsonify({'mensagem': 'O e-mail inserido já está registado!'}), 400

            novo_utente = Utentes(
                numutente=numutente, nome=nome, nascimento=nascimento, sexo=sexo,
                nic=nic, morada=morada, contacto=contacto, email=email)
            db.session.add(novo_utente)
            db.session.commit()
            
            return jsonify({'mensagem': 'Utente registado com sucesso!', 'redirect': url_for('utentes.home', user=current_user)}), 201
        
        except SQLAlchemyError as e:
            db.session.rollback()
            return jsonify({'mensagem': 'Erro ao registrar utente: ' + str(e)}), 500
        finally:
            db.session.close()
  
    return render_template('registoutente.html', user=current_user)


@utentes.route('/perfilutente/<int:numutente>', methods=['GET'])
#@login_required
def perfil_utente(numutente):
    # Lógica para exibir o perfil do utente com o número de utente especificado
    utente = Utentes.query.filter_by(numutente=numutente).first()
    if utente:
        # Se o utente for encontrado, renderize o template do perfil do utente
        return render_template("perfilUtente.html", user=current_user, utente=utente)
    else:
        # Se o utente não for encontrado, redirecione para uma página de erro ou faça algo adequado
        return render_template("erro.html", mensagem="Utente não encontrado"), 404
    

   
@utentes.route('/editarperfilutente/<int:numutente>', methods=['POST'])
def editar_utente(numutente):
    try:
        utente = Utentes.query.filter_by(numutente=numutente).first()

        nome = request.form.get('nome')
        nic = request.form.get('nic')
        data = request.form.get('nascimento')
        sexo = request.form.get('sexo')
        morada = request.form.get('morada')
        contacto = request.form.get('contacto')
        email = request.form.get('email')
 
        utente = Utentes.query.filter_by(numutente=numutente) 
        if utente is not None:
            utente.nome = nome
            utente.nic = nic
            utente.data = data
            utente.sexo = sexo
            utente.morada = morada
            utente.contacto = contacto
            utente.email = email
            db.session.commit()  # Guarda as alterações na base de dados

        
        return jsonify({'mensagem': 'Registado com sucesso!','redirect': url_for('utentes.home')}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'mensagem': 'Erro ao registrar utilizador: ' + str(e)}), 500
    finally:
            db.session.close()
    


@utentes.route('/eliminarregisto/<int:numutente>', methods=['POST'])
def eliminar_registo(numutente):
    try:

        Utentes.query.filter_by(numutente=numutente).delete()
        db.session.commit()

        return jsonify({'redirect': url_for('utentes.home')}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'mensagem': 'Erro ao eliminar utente: ' + str(e)}), 500
  
    finally:
        db.session.close()

