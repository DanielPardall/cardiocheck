# UC 3.3 - Atualizar Dados Pessoais do Utente

**Descrição:** Este caso descreve o processo de um médico atualizar os dados pessoais de um utente já registado no sistema. 
 
**Ator Primário:** Médico 

**Escopo:** Sistema de Gestão de Utentes

**Nível:** Sea Level

**Stakeholders e Interesses:**
- *Médicos:* Esperam atualizar os dados dos utentes para garantir que as informações mais recentes estejam disponíveis.
- *Utentes:* Esperam que as suas informações estejam atualizadas no sistema.

**Pré-condições:**
- O utente está registado na base de dados do sistema.
- O médico tem sessão ativa no sistema.

**Cenário Principal de Sucesso:**
1. O médico pesquisa o utente através do seu número de utente de saúde.
2. O médico seleciona a opção "Consultar Dados".
3. O sistema apresenta o registo do utente com os seus dados pessoais atuais.
4. O médico seleciona a opção de “Editar".
5. O médico visualiza e edita os campos de dados do utente que pretende atualizar.
6. O médico revisa os dados atualizados e confirma a introdução dos mesmos, selecionando a opção "Guardar Alterações".
7. O sistema atualiza as informações do utente na base de dados.
8. O médico recebe uma confirmação na interface do sistema de que os dados do utente foram atualizados com sucesso.

**Extensões:**
- 1a. Se o número de utente de saúde não estiver na base de dados, o sistema oferece oferece duas opções:  
    - Introduzir o número de utente de saúde novamente
    - Ir para a página de registo de novos utentes.
- 5a.  Caso os dados pessoais estejam num formato inválido ou incompleto, o sistema disponibilizará uma mensagem de erro que existem campos que necessitam de ser corrigidos ou preenchidos, oferecendo a oportunidade de realizar as devidas correções.
- 6a. Caso o médico não pretenda prosseguir com as alterações, seleciona a opção "Voltar" que retorna-o para o menu do sistema.
- 7a. Se ocorrer um erro durante a atualização do registo do utente na base de dados, o sistema informa o médico sobre o erro e solicita ao médico para tentar novamente ou sugere que retome a ação mais tarde.