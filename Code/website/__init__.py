import os
import time
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import joblib


from website.basedados import Medicos
from .extensions import db, login_manager

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'grupo4'
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['TEMPLATES_AUTO_RELOAD'] = True  
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0  

    # Configurações do pool de conexões
    app.config['SQLALCHEMY_POOL_SIZE'] = 10
    app.config['SQLALCHEMY_MAX_OVERFLOW'] = 20
    app.config['SQLALCHEMY_POOL_TIMEOUT'] = 30  # Tempo de espera por uma conexão do pool em segundos

    # Inicializando SQLAlchemy com as configurações de pool
    db = SQLAlchemy(app)
    db.init_app(app)

    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return Medicos.query.get(user_id)

    # Registando blueprints
    from .utentes import utentes
    from .perfilUtilizador import perfil
    from .definicoes import definicoes
    from .guardarPerfilUtilizador import guardarPerfilUtilizador
    from .autenticar import autenticar
    from .preverRisco import previsao


    app.register_blueprint(autenticar)
    app.register_blueprint(utentes)
    app.register_blueprint(perfil)
    app.register_blueprint(definicoes)
    app.register_blueprint(guardarPerfilUtilizador)
    app.register_blueprint(previsao)


    @app.route('/')
    def home():
        return render_template('pagInicial.html') 

    # Espera/retry para garantir que a base de dados está pronta
    retry_count = 5
    while retry_count > 0:
        try:
            with app.app_context():
                db.create_all()  # Tentativa de criação das tabelas
            print("Database connected and tables created.")
            break
        except Exception as e:
            print(f"Database connection failed. Retrying... ({retry_count-1} retries left)")
            time.sleep(5)  # Espera por 5 segundos antes de tentar novamente
            retry_count -= 1
            if retry_count == 0:
                print("Failed to connect to the database after several retries.")
                raise e

    return app
