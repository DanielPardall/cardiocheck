document.addEventListener('DOMContentLoaded', function() {
    // Função para habilitar os campos do formulário para edição
    function enableForm() {
        var nome = document.getElementById('nome-completo');
        var contacto = document.getElementById('contacto');
        var email = document.getElementById('email');
        var saveBtn = document.getElementById('save-button');
        var cancelButton = document.getElementById('cancel-button');

        // Habilitar campos para edição
        nome.disabled = false;
        nome.style.backgroundColor = "#ffffff";
        contacto.disabled = false;
        contacto.style.backgroundColor = "#ffffff";
        email.disabled = false;
        email.style.backgroundColor = "#ffffff";

        // Alterar visibilidade dos botões
        editarBtn.style.display = 'none';  // Esconde o botão Editar
        saveBtn.style.display = 'block';   // Mostra o botão Guardar
        cancelButton.style.display = 'block'; // Mostra o botão Cancelar
    }

    // Função para cancelar a edição e recarregar a página
    function cancelEdit() {
        window.location.reload(); // Recarregar a página para cancelar mudanças
    }

    // Event listener para o botão "Editar"
    var editarBtn = document.querySelector('.edit-button');
    editarBtn.addEventListener('click', enableForm);

    // Event listener para o botão "Cancelar"
    var cancelButton = document.getElementById('cancel-button');
    cancelButton.addEventListener('click', cancelEdit);
});



document.addEventListener('DOMContentLoaded', function() {
          
           
    var epForm = document.getElementById('ep-form');
    var submitButton = epForm.querySelector('button[type="submit"]');

    epForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        var nome = document.getElementById('nome-completo');
        var contacto = document.getElementById('contacto');
        var email = document.getElementById('email');
        var errorMessage = '';
        
        if (!nome.value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            errorMessage = 'O nome deve conter apenas letras e espaços.';
        } else if (!contacto.value.match(/^\d{9}$/)) {
            errorMessage = 'O número de telemóvel deve ter 9 dígitos.';
        } else if (!email.value.match(/\S+@\S+\.\S+/)) {
            errorMessage = 'O endereço de e-mail não é válido.';
        } 
    
        if (errorMessage) {
            displayMessage(errorMessage, false, false);
        } else {
            submitButton.disabled = true;
            var formData = new FormData(apForm);
    
            fetch('/guardarPerfilUtilizador', {
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
                submitButton.disabled = false;
               messageDiv.style.display = 'none';
             }, 3000);
        } 
    }

    
});
