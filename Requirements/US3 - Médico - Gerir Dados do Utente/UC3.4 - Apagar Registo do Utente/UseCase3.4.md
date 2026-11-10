## UC 3.5 - Apagar Registo do Utente

**Descrição:** Este caso de uso descreve o processo de um médico apagar o registo de um utente já registado no sistema. Esta ação é irreversível.

**Ator Primário:** Médico

**Escopo:** Sistema de gestão de utentes

**Nível:** Sea Level

**Stakeholders e Interesses:**
- *Médicos:* Desejam ter a capacidade de apagar registos de utentes que não são mais necessários.
- *Utentes:* Desejam que os seus dados sejam confidenciais e que possam ser apagados quando não forem mais necessários.

**Pré-condições:**
- O utente está registado na base de dados do sistema.
- O médico tem sessão ativa no sistema.

**Cenário Principal de Sucesso:**
1. O médico pesquisa o utente através do seu número de utente de saúde e seleciona-o.
2. O sistema apresenta o registo do utente com os seus dados pessoais e de saúde.
3. O médico seleciona a opção de “Eliminar o Registo do Utente".
4. O sistema apresenta um aviso informando que a ação de apagar o registo é irreversível.
5. O médico confirma novamente que deseja apagar o registo do utente.
6. O sistema apaga o registo do utente da base de dados.
7. O sistema informa o médico que o registo do utente foi apagado com sucesso.

**Extensões:**
- 6a. Caso haja um erro, o médico deverá repetir o processo desde o passo 1.