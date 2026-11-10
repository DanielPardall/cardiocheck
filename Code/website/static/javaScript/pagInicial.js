document.addEventListener('DOMContentLoaded', function() {
    var registerModal = document.getElementById('register-modal');
    var registerBtn = document.getElementById('register-btn');
    var loginModal = document.getElementById('login-modal');
    var loginBtn = document.getElementById('login-btn');
    var spans = document.getElementsByClassName('close-btn');
    var registrationForm = document.getElementById('registration-form');
    var submitButton = registrationForm.querySelector('button[type="submit"]');
    var loginForm = document.getElementById('login-form');
    var loginSubmitButton = loginForm.querySelector('button[type="submit"]');
    
    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'flex';
        document.getElementById('message-container').style.display = 'none';
        submitButton.disabled = false;
    });

    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'flex';
        document.getElementById('message-container').style.display = 'none';
        loginSubmitButton.disabled = false;
    });

    Array.from(spans).forEach(span => {
        span.addEventListener('click', function() {
            registerModal.style.display = 'none';
            loginModal.style.display = 'none';
        });
    });
   
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var fullName = document.getElementById('full-name');
        var idProfissional = document.getElementById('professional-id');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var password = document.getElementById('password');
        var confirmPassword = document.getElementById('confirm-password');
        var errorMessage = '';
        
        if (!fullName.value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            errorMessage = 'O nome deve conter apenas letras e espaços.';
        } else if (!idProfissional.value.match(/^\d+$/)) {
            errorMessage = 'O número de cédula profissional deve conter apenas dígitos.';
        } else if (!email.value.match(/\S+@\S+\.\S+/)) {
            errorMessage = 'O endereço de e-mail não é válido.';
        } else if (!phone.value.match(/^\d{9}$/)) {
            errorMessage = 'O número de telemóvel deve ter 9 dígitos.';
        } else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
            errorMessage = 'A palavra-passe deve ter pelo menos 8 caracteres, incluindo 1 letra maiúscula, 1 letra minúscula e 1 número.';
        } else if (password.value !== confirmPassword.value) {
            errorMessage = 'As palavras-passe não coincidem.';
        }

        if (errorMessage) {
            displayMessage(errorMessage, false, false);
        } else {
            submitButton.disabled = true;
            var formData = new FormData(registrationForm);

            fetch('/register', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(data => Promise.reject(new Error(data.mensagem || 'Erro desconhecido')));
                }
                return response.json();
            })
            .then(data => {
                displayMessage(data.mensagem, true, true);
                setTimeout(function() {
                    registerModal.style.display = 'none';
                    loginModal.style.display = 'flex';
                }, 10000);
            })
            .catch(error => {
                displayMessage(error.message, false, true);
                submitButton.disabled = false;
            });
        }
    });

    function displayMessage(message, isSuccess, reset) {
        var messageDiv = document.getElementById('message-container');
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';
        messageDiv.className = 'message';
        if (isSuccess) {
            messageDiv.classList.add('success');
        } else {
            messageDiv.classList.add('error');
        }
        if (reset) {
            setTimeout(function() {
                messageDiv.style.display = 'none';
                submitButton.disabled = false;
                registrationForm.reset();
            }, 3000);
        } 
    }

    let errosLogin = 0; // Variável para contar os erros de login

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var formData = new FormData(loginForm);

        fetch('/login', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                errosLogin++; // Incrementa a contagem de erros
                if (errosLogin >= 3) { // Se exceder 3 erros, exibe aviso e bloqueia o botão
                    return response.json().then(data => Promise.reject(new Error(data.mensagem || 'Bloqueado')));
                } 
                return response.json().then(data => Promise.reject(new Error(data.mensagem || 'Erro desconhecido')));
            }
            return response.json();
        })
        .then(data => {
            errosLogin = 0; // Reinicia a contagem de erros apenas se o login for bem-sucedido
            displayMessagelogin(data.mensagem, true, false, false);
            if (data.redirect) {
                window.location.href = data.redirect;
            }
        })
        .catch(error => {
            if (errosLogin >= 3) { 
                
                displayMessagelogin("Excedeu o número máximo de tentativas. Clique <a href='/reset_password'>aqui</a> para redefinir sua senha.", false, true, false); 

                loginSubmitButton.disabled = true;
                setTimeout(function() { 
                    messageDiv.style.display = 'none';
                    loginSubmitButton.disabled = false;
                    loginForm.reset();
                    errosLogin = 0;
                }, 30000);
            } else {
                displayMessagelogin(error.message, false, false, false); 
                loginSubmitButton.disabled = false;
            }        
        });
    });

    function displayMessagelogin(message, isSuccess, isBlock, reset) {
        var messageDiv = document.getElementById('feedback-container');
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';
        messageDiv.className = 'message';
        if (isSuccess) {
            messageDiv.classList.add('success');
        } else if (isBlock) {
            messageDiv.classList.add('block');
        } else {
            messageDiv.classList.add('error');
        }
        if (reset) {
            setTimeout(function() {
                messageDiv.style.display = 'none';
                loginSubmitButton.disabled = false;
                loginForm.reset();
            }, 1000); 
        } 
    }



    
    // apagar formulário e botões quando a página é recarregada por navegação de histórico
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.getElementById('message-container').style.display = 'none';
            document.getElementById('feedback-container').style.display = 'none';
            submitButton.disabled = false;
            loginSubmitButton.disabled = false;
            registrationForm.reset();
            loginForm.reset();
        }
    });
});