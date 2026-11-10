## UC 3.2 - Consultar Dados Pessoais do Utente 

**Descrição:** Este caso de uso descreve o processo de um médico consultar os dados pessoais de um utente já registado no sistema

**Ator Primário:** Médico

**Escopo:** Sistema de gestão de utentes

**Nível:** Sea Level

**Stakeholders e Interesses:**
- *Médicos:* Esperam consultar os dados dos utentes de forma rápida e precisa.
- *Utentes:* Desejam que os seus dados sejam confidenciais, armazenados de forma segura e usados apenas para fins de tratamento médico.  

**Pré-condições:**
- O utente está registado na base de dados do sistema.
- O médico tem sessão ativa no sistema.

**Cenário Principal de Sucesso:**
1. O médico pesquisa o utente no botão “Pesquisar Utente” através do seu número de utente de saúde e seleciona-o.
2. O médico seleciona a opção de “Consultar Dados".
3. O médico visualiza os dados que o sistema apresenta do utente e uma lista de todas as previsões de risco de doenças cardíacas que foram feitas para o utente.
4. O médico pode utilizar o histórico de previsões e os dados clínicos para auxiliar no diagnóstico e tratamento do utente.

**Extensões:**
- 1a. Se o número de utente de saúde não estiver na base de dados, o sistema oferece duas opções:  
    - Introduzir o número de utente de saúde novamente
    - Ir para a página de registo de novos utentes.
- 3a. Se o médico pretender voltar ao menu do sistema, seleciona a opção "Voltar".
- 3b. Se ocorrer um erro na solicitação do histórico de previsões, o sistema informa o médico sobre o erro e solicita ao médico para tentar novamente ou sugere que retome a ação mais tarde.