document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário
        var numutente = document.getElementById('numutente').value;
        fetch('/pesquisar-utente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({numutente: numutente})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao pesquisar utente: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.nome) {
                var resultRow = document.getElementById('resultRow');
                resultRow.innerHTML = `
                    <td>${data.nome}</td>
                    <td>${data.numutente}</td>
                    <td><a style="font-weight: bold; border:none; border-bottom: 2px solid #101D4B; cursor: pointer;" onclick="consultarDados('${data.numutente}')">Consultar Dados</a></td>
                `;
                document.getElementById('resultsTable').style.display = 'table';
            } else {
                alert('Utente não encontrado!');
            }
        })
        .catch(error => console.error('Erro ao pesquisar utente:', error));
    });
});

function consultarDados(numutente) {
    // Redireciona para a página do perfil do usuário
    window.location.href = `/perfilutente/${numutente}`;
}


