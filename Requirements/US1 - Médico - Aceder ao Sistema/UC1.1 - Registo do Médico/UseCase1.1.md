## UC 1.1 - Registo do Médico

**Descrição:** Este caso de uso descreve o processo de um novo médico registar-se no sistema

**Ator Primário:** Médico

**Escopo:**  Sistema de acesso do médico

**Nível:** Sea level

**Stakeholders e Interesses:**
- *Médicos:* Desejam ter um registo fácil e seguro que proteja as suas informações e as dos utentes

**Pré-condições:**
- O médico deve ter acesso a um dispositivo com ligação à internet
- O sistema deve estar online e acessível.

**Cenário Principal de Sucesso:**
1. O médico acede à página de registo no sistema, clicando em “Registo”.
2. O médico insere o seu nome, endereço de e-mail, número de telefone, número de cédula profissional e define uma palavra-passe.
3. Envia o formulário de registo ao clicar no botão “Registar”.
4. O sistema envia um e-mail de confirmação para o endereço de e-mail fornecido pelo médico (ainda não implementado).
5. O médico clica no link de confirmação no e-mail (ainda não implementado).
6. O sistema confirma a verificação (ainda não implementado).
7. O médico é redirecionado para a página de login do sistema (UC 1.2)

**Extensões:**
- 3a. Se o médico não inserir palavras-passes coincidentes, o sistema exibirá uma mensagem de erro.
- 3b. Se o médico inserir um endereço de e-mail já registado, o sistema exibirá uma mensagem de erro.
- 3c. Se o médico inserir uma cédula profissional já registada, o sistema exibirá uma mensagem de erro.
- 3d. Se o médico inserir um contacto telefónico inválido, o sistema exibirá uma mensagem de erro.
- 3e. Se o médico inserir uma senha que não esteja de acordo com as restrições, o sistema exibirá uma mensagem de erro e solicitará uma senha válida.
- 3f. Se o médico não preencher algum dos campos pedidos, o sistema exibirá uma mensagem de pop-up.
- 5a. Se o médico não receber o e-mail de verificação dentro de 5 minutos, o sistema oferece a opção de reenviar o email (ainda não implementado).


