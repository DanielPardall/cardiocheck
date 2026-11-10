## UC 2.2 - Alterar Palavra-Passe

**Descrição:** Este caso descreve o processo de um médico alterar a sua palavra-passe no sistema.

**Ator Primário:** Médico.

**Escopo:** Sistema de gestão de conta do médico

**Nível:** Sea level

**Stakeholders e Interesses:**
- *Médicos:* Desejam ter controlo sobre a sua senha e aumentar a segurança da sua conta.

**Pré-condições:**
- O médico deve ter a sessão iniciada no sistema.

**Cenário Principal de Sucesso:**
1. O médico acede à página de perfil no menu do sistema.
2. Seleciona a opção “Alterar a palavra-passe”.
3. O sistema apresenta um formulário para inserir a palavra-passe atual, a nova palavra-passe desejada e a confirmação da mesma.
4. O médico insere a palavra-passe atual, a nova palavra-passe desejada duas vezes em dois campos distintos.
5. Após inserir as palavras-passes referidas, o médico seleciona a opção "Guardar" para validar essa alteração.
6. O sistema valida a nova palavra-passe de acordo com critérios de segurança de palavra-passe estabelecidos pelo sistema.
7. O sistema atualiza a palavra-passe do médico e envia uma mensagem de confirmação para o seu endereço de e-mail.
8. O médico clica no link de confirmação para concluir o processo de alteração da palavra-passe.

**Extensões:**
- 5a. Se o médico não pretende seguir com a alteração, seleciona a opção "Voltar" para regressar ao menu do sistema.
- 6a. Se a palavra-passe atual estiver incorreta, o sistema informa o médico e solicita que ele a insira novamente.
- 6b. Se a nova palavra-passe não atender aos critérios de segurança, o sistema informa o médico e solicita que ele a insira novamente.
- 8a. Se o médico não confirmar o e-mail dentro de um período de tempo, a palavra-passe não será alterada.
