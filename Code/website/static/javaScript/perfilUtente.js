function openModal() {
    var modal = document.getElementById('eliminar-modal');
    modal.style.display = 'block';
}

function fecharModal() {
    var modal = document.getElementById('eliminar-modal');
    modal.style.display = 'none';
}

function eliminarRegisto() {
    var infoUtente = document.getElementById('info-utente').innerText;
    var numutente = infoUtente.split(' - ')[1]; // Obtém o número do utente a partir da informação na label
    fetch(`/eliminarregisto/${numutente}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numutente: numutente })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao eliminar registro: ' + response.status);
        }
        // Redireciona para a página inicial após a eliminação bem-sucedida
        window.location.href = data.redirect;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}


////////////////////////////////////EDITAR///////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Função para habilitar os campos do formulário para edição
    function enableForm() {
        var nome = document.getElementById('nome-completo');
        var data = document.getElementById('data-nascimento');
        var sexo = document.getElementById('sexo');
        var nic = document.getElementById('nic');
        var morada = document.getElementById('morada');
        var contacto = document.getElementById('contacto');
        var email = document.getElementById('email');
        
        // Botões
        var saveBtn = document.getElementById('save-button');
        var cancelButton = document.getElementById('cancel-button');
        var editarBtn = document.getElementById('editar-button'); // Adicionado

        // Habilitar campos para edição
        nome.disabled = false;
        nome.style.backgroundColor = "#ffffff";
        data.disabled = false;
        data.style.backgroundColor = "#ffffff";
        sexo.disabled = false;
        sexo.style.backgroundColor = "#ffffff";
        nic.disabled = false;
        nic.style.backgroundColor = "#ffffff";
        morada.disabled = false;
        morada.style.backgroundColor = "#ffffff";
        contacto.disabled = false;
        contacto.style.backgroundColor = "#ffffff";
        email.disabled = false;
        email.style.backgroundColor = "#ffffff";

        // Resetar estilo do cursor
        nome.style.cursor = "auto";
        data.style.cursor = "auto";
        sexo.style.cursor = "auto";
        nic.style.cursor = "auto";
        morada.style.cursor = "auto";
        contacto.style.cursor = "auto";
        email.style.cursor = "auto";
        // Alterar visibilidade dos botões
        saveBtn.style.display = 'block';   // Mostra o botão Guardar
        cancelButton.style.display = 'block'; // Mostra o botão Cancelar
        editarBtn.style.display = 'none';  // Esconde o botão Editar
    }

    // Função para cancelar a edição e recarregar a página
    function cancelEdit() {
        window.location.reload(); // Recarregar a página para cancelar mudanças
    }

    // Event listener para o botão "Editar"
    var editarBtn = document.getElementById('editar-button');
    editarBtn.addEventListener('click', enableForm);

    var cancelarBtn = document.getElementById('cancel-button');
    cancelarBtn.addEventListener('click', cancelEdit);

    

});
document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('save-button');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var epForm = document.getElementById('pu-form');

        var numUtente = document.getElementById('num_saude');
        var nome = document.getElementById('nome-completo');
        var nascimento = document.getElementById('data-nascimento');
        var nic = document.getElementById('nic');
        var contacto = document.getElementById('contacto');
        var email = document.getElementById('email');
        var errorMessage = '';

        if (!nome.value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            errorMessage = 'O nome deve conter apenas letras e espaços.';
        } else if (!nascimento.value.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)) {
            errorMessage = 'A data de nascimento deve estar no formato AAAA-MM-DD e deve ser uma data válida.';
        } else if (!nic.value.match(/^\d{9}$/)) {
            errorMessage = 'O NIC deve ter 9 dígitos.';
        } else if (!contacto.value.match(/^\d{9}$/)) {
            errorMessage = 'O número de telemóvel deve ter 9 dígitos.';
        } else if (!email.value.match(/\S+@\S+\.\S+/)) {
            errorMessage = 'O endereço de e-mail inserido não é válido.';
        }

        if (errorMessage) {
            displayMessage(errorMessage, false, false);
        } else {
            submitButton.disabled = true;
            var formData = new FormData(epForm);

            fetch(`/editarperfilutente/${numUtente}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ numutente: numUtente })
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(data => Promise.reject(new Error(data.mensagem || 'Erro desconhecido')));
                }
                return response.json();
            })
            .then(data => {
                displayMessage(data.mensagem, true, true);
                window.location.href = data.redirect;
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

function preverRisco() {
    var infoUtente = document.getElementById('info-utente').innerText;
    var numutente = infoUtente.split(' - ')[1]; // Obtém o número do utente a partir da informação na label
    window.location.href = `/previsao/${numutente}`;
}