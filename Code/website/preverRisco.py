from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import current_user, login_required
from sqlalchemy.exc import SQLAlchemyError 
from . import db
from datetime import datetime
from .basedados import Utentes, Previsoes
import numpy as np
import pandas as pd
from joblib import load

previsao = Blueprint('previsao', __name__)

model = load('website/model/modelo_previsao.joblib')
scaler = load('website/model/scaler.joblib')
feature_names = ['age', 'sex', 'cp', 'trtbps', 'chol', 'fbs', 'restecg', 'thalachh', 'exng', 'oldpeak', 'slp', 'caa', 'thall']

@previsao.route('/previsao/<int:numutente>', methods=['GET'])
def home(numutente):
    # Lógica para exibir o perfil do utente com o número de utente especificado
    utente = Utentes.query.filter_by(numutente=numutente).first()
    if utente:
        # Se o utente for encontrado, renderize o template do perfil do utente
        return render_template("preverRisco.html", user=current_user, utente=utente)
    else:
        # Se o utente não for encontrado, redirecione para uma página de erro ou faça algo adequado
        return render_template("erro.html", mensagem="Utente não encontrado"), 404

@previsao.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    new_data_df = pd.DataFrame([data], columns=feature_names)
    new_data_normalized = scaler.transform(new_data_df)
    prediction = model.predict(new_data_normalized)
    return jsonify({'prediction': int(prediction[0])})

@previsao.route('/save_prediction', methods=['POST'])
def save_prediction():
    data = request.get_json()
    num_utente = data.get('numUtente')
    previsao_resultado = data.get('previsao')

    if not previsao_resultado:
        return jsonify({'message': 'Nenhuma previsão foi realizada ainda.'}), 400

    nova_previsao = Previsoes(numUtente=num_utente, previsao=previsao_resultado, data_previsao=datetime.now())
    db.session.add(nova_previsao)
    try:
        db.session.commit()
        return jsonify({'message': 'Previsão guardada com sucesso!'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Erro ao salvar a previsão.'+str(e)}), 500