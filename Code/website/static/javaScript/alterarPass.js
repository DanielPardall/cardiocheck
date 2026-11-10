document.addEventListener('DOMContentLoaded', function() {

    var apForm = document.getElementById('ap-form');
    var submitButton = apForm.querySelector('button[type="submit"]');

    apForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        var passNova = document.getElementById('new-password');
        var conf_passNova = document.getElementById('confirm-password');
        var errorMessage = '';
        
        if (!passNova.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
            errorMessage = 'A palavra-passe deve ter pelo menos 8 caracteres, incluindo 1 letra maiúscula, 1 letra minúscula e 1 número.';
        } else if (passNova.value !== conf_passNova.value) {
            errorMessage = 'As palavras-passe não coincidem.';
        }
    
        if (errorMessage) {
            displayMessage(errorMessage, false, false);
        } else {
            submitButton.disabled = true;
            var formData = new FormData(apForm);
    
            fetch('/alterarPass', {
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
            }, 3000);
        } 
    }
    
});



