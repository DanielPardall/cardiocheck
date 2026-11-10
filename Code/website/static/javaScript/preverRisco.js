// Adiciona um ouvinte de eventos para o DOMContentLoaded para executar depois que o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Função para atualizar os elementos de saída com o valor dos sliders
    function updateOutput(sliderId, outputId) {
      var slider = document.getElementById(sliderId);
      var output = document.getElementById(outputId);
      output.value = slider.value; // Atualiza o output com o valor do slider
  
      // Atualiza o output sempre que o valor do slider mudar
      slider.addEventListener('input', function () {
        output.value = this.value;
      });
    }
  
    // Chama a função updateOutput para cada par de slider e output
    updateOutput('idade', 'idade-output');
    updateOutput('pressao-arterial', 'pressao-arterial-output');
    updateOutput('colesterol', 'colesterol-output');
    // Adicione mais chamadas para updateOutput aqui para outros sliders
  
    // Lógica para lidar com o envio do formulário
    var form = document.getElementById('risk-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio normal do formulário
  
      // Coletar os valores do formulário aqui
      var formData = {
        idade: form['idade'].value,
        sexo: form['sexo'].value,
        tipo_dor_peito: form['tipo-dor-peito'].value,
        pressao_arterial: form['pressao-arterial'].value,
        colesterol: form['colesterol'].value,
        glicemia_jejum: form['glicemia-jejum'].value,
        // Adicione mais dados conforme necessário
      };
  
      // Aqui você pode fazer uma solicitação AJAX ao seu servidor Flask
      // Substitua a URL '/calculate_risk' pelo endpoint correto do seu Flask
      // Esta é apenas uma estrutura básica, você precisará ajustá-la conforme necessário
      fetch('/calculate_risk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Processa a resposta do servidor aqui
        // Por exemplo, atualize o elemento de resultado com a resposta
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.style.display = 'block';
        resultadoDiv.textContent = data.result === 1 ? 'Elevado' : 'Baixo';
        resultadoDiv.className = data.result === 1 ? 'high-risk' : 'low-risk';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
      // Lembre-se que o código acima é apenas um exemplo
      // Você precisa configurar a rota e o método de manipulação de POST em seu Flask app.py
    });
  });
  