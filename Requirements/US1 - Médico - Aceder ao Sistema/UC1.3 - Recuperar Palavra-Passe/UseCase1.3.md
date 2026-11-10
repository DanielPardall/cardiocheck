## UC 1.3 - Recuperar Palavra-Passe

**Descrição:** Este caso de uso descreve o processo pelo qual um médico recupera a sua senha caso a tenha esquecido.

**Ator Primário:** Médico

**Escopo:** Sistema de acesso do médico

**Nível:** Sea level

**Stakeholders e Interesses:**
- *Médicos:* Necessitam de um método seguro e eficiente para recuperar o acesso ao sistema caso se esqueçam da sua palavra passe.

**Pré-condições:**
- O médico deve ter uma conta ativa no sistema.
- O médico tem acesso ao endereço de e-mail válido no sistema.

**Cenário Principal de Sucesso:**
1. O médico seleciona a opção "Esqueceu-se da palavra-passe?” na página de login.
2. Insere o seu endereço de email associado à conta no sistema.
3. O sistema verifica a existência do email e envia um link de redefinição da palavra passe para o email registado.
4. O médico acede ao seu email, clica no link de redefinição e é direcionado para uma página segura do sistema para criar uma nova palavra passe.
5. Após criar e confirmar a nova palavra passe, o sistema atualiza as credenciais de acesso do médico.
6. O médico pode efetuar o login com a nova palavra passe.

**Extensões:**
- 3a. Se o e-mail fornecido não estiver associado a uma conta ativa, o sistema informa ao médico que o e-mail não foi encontrado.
- 4a. Se o link de redefinição de senha expirar dentro de um período de tempo, antes de ser utilizado pelo médico, o sistema permite solicitar um novo link.
- 5a. Se a nova palavra passe não atender aos critérios de segurança estabelecidos pelo sistema (por exemplo, comprimento mínimo, inclusão de caracteres especiais), o sistema solicita que o médico crie uma palavra passe que atenda a esses critérios.
