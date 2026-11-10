## UC 4.1 - Prever o risco de doenças cardíacas

**Descrição:** Este caso de uso descreve o processo integrado de um médico adicionar dados de saúde a um utente já registado no sistema e, em seguida, utilizar a aplicação para prever o risco de doenças cardíacas com base nesses dados.

**Ator Primário:** Médico.

**Escopo:** Sistema de previsão de risco de doenças cardíacas.

**Nível:** Sea Level.

**Stakeholders e Interesses:**
- *Médicos:* Esperam poder introduzir os dados de saúde dos utentes facilmente e usar esses dados para prever riscos de doenças cardíacas, facilitando o diagnóstico e o tratamento.
- *Utentes:* Desejam que os seus dados resultem numa previsão precisa, para fins de tratamento e previsão de riscos médicos.

**Pré-condições:**
- O utente está registado na base de dados do sistema.
- O médico tem sessão iniciada no sistema.

**Cenário Principal de Sucesso:**
- 1. O médico pesquisa o utente através do seu número de utente de saúde e seleciona-o.
- 2. O sistema apresenta a ficha do utente com os seus dados pessoais.
- 3. O médico seleciona a opção de “Prever Risco".
- 4. O médico preenche o formulário de inserção com os dados de saúde do utente necessários, como:
    - Idade
    - Sexo
    - Tipo de dor no peito
    - Pressão arterial
    - Colesterol
    - Glicose no sangue em jejum
    - Eletrocardiograma em repouso
    - Frequência cardíaca máxima atingida
    - Angina induzida pelo exercício
    - Depressão do segmento ST induzida pelo exercício em relação ao repouso
    - Inclinação do segmento ST no pico do exercício
    - Número de grandes vasos coloridos por fluoroscopia
    - Talassemia
- 5. Após a inserção, o médico seleciona a opção de “Calcular Risco”.
- 6. O sistema utiliza o modelo para calcular a previsão do risco de doenças cardíacas do utente.
- 7. O sistema apresenta a previsão do risco de doenças cardíacas.
- 8. Para guardar o resultado da previsão o médico deve clicar na opção "Guardar Resultado".


**Extensões:**
- 3a. Se o médico desejar cancelar a ação de realizar a previsão pode clicar no botão "Voltar" e o sistema redireciona-o para a página onde estava anteriomente.  
- 7a. Erro na previsão do risco: Informa-se o médico sobre o erro.
- 8a. Se o médico não realizou nenhuma previsão na sessão atual e tentar realizar a ação de Guardar Resultado, o sistema informa que nenhuma previsão foi efetuada.
- 8b. Erro ao guardar o resultado da previsão: Informa-se o médico sobre o erro.