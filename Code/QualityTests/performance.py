import threading
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
import os

def register_user(full_name, professional_id, email, phone, password):
    driver_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'geckodriver.exe')
    service = Service(executable_path=driver_path)
    firefox_options = Options()
    firefox_options.binary_location = r'C:\Program Files\Mozilla Firefox\firefox.exe'
    driver = webdriver.Firefox(service=service, options=firefox_options)

    try:
        driver.get("http://localhost:5000")
        driver.implicitly_wait(10)

        register_button = driver.find_element(by=By.ID, value="register-btn")
        register_button.click()
        driver.implicitly_wait(10)

        # Completar o formulário de registo
        driver.find_element(By.ID, "full-name").send_keys(full_name)
        driver.find_element(By.ID, "professional-id").send_keys(professional_id)
        driver.find_element(By.ID, "email").send_keys(email)
        driver.find_element(By.ID, "phone").send_keys(phone)
        driver.find_element(By.ID, "password").send_keys(password)
        driver.find_element(By.ID, "confirm-password").send_keys(password)

        # Enviar o formulário
        driver.find_element(By.CSS_SELECTOR, ".register-btn").click()

    except Exception as e:
        print(f"An error occurred: {e}")     
    finally:
        time.sleep(3)
        driver.quit()

# Dados de exemplo para cinco pessoas diferentes
dados_pessoas = [
    {"full_name": "Pessoa Um", "professional_id": "123456", "email": "pessoa1@example.com", "phone": "900500401", "password": "Senha123"},
    {"full_name": "Pessoa Dois", "professional_id": "654321", "email": "pessoa2@example.com", "phone": "900500402", "password": "Senha123"},
    {"full_name": "Pessoa Três", "professional_id": "987654", "email": "pessoa3@example.com", "phone": "900500403", "password": "Senha123"},
    {"full_name": "Pessoa Quatro", "professional_id": "456789", "email": "pessoa4@example.com", "phone": "900500404", "password": "Senha123"},
    {"full_name": "Pessoa Cinco", "professional_id": "987654", "email": "pessoa5@example.com", "phone": "900500405", "password": "Senha123"}
]

# Criar e iniciar múltiplas threads para registrar cinco pessoas diferentes
threads = []
for pessoa in dados_pessoas:
    thread = threading.Thread(target=register_user, args=(pessoa["full_name"], pessoa["professional_id"], pessoa["email"], pessoa["phone"], pessoa["password"]))
    thread.start()
    threads.append(thread)

# Aguardar todas as threads terminarem
for thread in threads:
    thread.join()

# limpar os resultados dos testes
