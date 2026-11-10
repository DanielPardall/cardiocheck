document.addEventListener('DOMContentLoaded', function() {
    
    var ruForm = document.getElementById('ru-form');
    var submitButton = ruForm.querySelector('button[type="submit"]');

    ruForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var numUtente = document.getElementById('num_saude');
        var nome = document.getElementById('nome-completo');
        var nascimento = document.getElementById('data-nascimento');
        var nic = document.getElementById('nic');
        var contacto = document.getElementById('contacto');
        var email = document.getElementById('email');
        var errorMessage = '';
        
        if (!numUtente.value.match(/^\d{9}$/)) {
            errorMessage = 'O número de utente deve ter 9 dígitos.';
        } else if (!nome.value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            errorMessage = 'O nome deve conter apenas letras e espaços.';
        } else if (!nascimento.value.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)) {
            errorMessage = 'A data de nascimento deve estar no formato AAAA-MM-DD e deve ser uma data válida.';
        } else if (!nic.value.match(/^\d{8}$/)) {
            errorMessage = 'O NIC deve ter 8 dígitos.';
        } else if (!contacto.value.match(/^\d{9}$/)) {
            errorMessage = 'O número de telemóvel deve ter 9 dígitos.';
        } else if (!email.value.match(/\S+@\S+\.\S+/)) {
            errorMessage = 'O endereço de e-mail inserido não é válido.';
        }         

        if (errorMessage) {
            displayMessage(errorMessage, false, false);
        } else {
            submitButton.disabled = true;
            var formData = new FormData(ruForm);

            fetch('/registoutente', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.redirect) {
                    displayMessage(data.mensagem, true, true);
                    setTimeout(function() {
                        window.location.href = data.redirect; 
                    }, 1000);                 
                }
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