## UC 3.1 - Registar Novo Utente

**Descrição**: Este caso de uso descreve o processo de um médico registar um novo utente no sistema.

**Ator Primário**: Médico

**Escopo**: Sistema de gestão de utentes

**Nível**: Sea Level

**Stakeholders e Interesses**:

- *Médicos*: Desejam registar novos utentes de forma rápida e eficiente, e com a certeza de que os dados dos seus utentes são seguros e confidenciais.
Utentes: Desejam que os seus dados sejam confidenciais, armazenados de forma segura e usados apenas para fins de tratamento médico.

**Pré-condições**:
- O médico deve ter sessão iniciada no sistema.
- O utente deve fornecer os seus dados pessoais.

**Cenário Principal de Sucesso**:
1. O médico seleciona a funcionalidade de “Registar Utente".
2. O sistema apresenta um formulário de registo para o médico inserir os dados pessoais do utente, como:
- Nome completo
- Data de nascimento
- Sexo
- Número de identificação civil
- Número de utente de saúde
- Morada
- Número Telemóvel
- E-mail
3. O médico revisa os dados inseridos e confirma o registo do utente selecionando a opção "Registar".
4. O sistema verifica se os dados inseridos ainda não se encontram registados na base de dados do sistema.
5. O sistema armazena os dados do utente, atribuindo o nº de utente de saúde como identificador único ao novo registo.
6. O médico recebe uma confirmação na interface do sistema de que o utente foi registado com sucesso.

**Extensões**:
- 3a. Caso os dados estejam num formato inválido, o sistema disponibilizará uma mensagem de erro que existem campos que necessitam de ser corrigidos ou preenchidos, oferecendo a oportunidade de realizar as devidas correções.
- 3b. Caso o médico não pretenda prosseguir com as alterações, seleciona a opção "Cancelar" que o retornará para o menu do sistema.
- 4a. Caso o utente esteja duplicado, o sistema deteta que o mesmo já está registado com base no número de utente e fornece uma mensagem de impossibilidade de registo 