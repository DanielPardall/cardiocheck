## UC 1.2 - Login do Médico

**Descrição:** Este caso de uso descreve o processo pelo qual um médico faz login no sistema.

**Ator Primário:** Médico

**Escopo:**  Sistema de acesso do médico

**Nível:** Sea level

**Stakeholders e Interesses:**
- *Médicos:* Desejam ter um login rápido, fácil e seguro que os leve diretamente para a área de trabalho do sistema.

**Pré-condições:**
- O médico deve ter-se registado no sistema.
- O médico possui as suas credenciais de login, incluindo o  endereço de email e senha.

**Cenário Principal de Sucesso:**
1. O médico acede à página de login no sistema, clicando em “Login” ou após fazer o registo (encaminhado).
2. Insere o seu endereço de email e senha nos campos apropriados.
3. Clica no botão de “Login" para autenticar no sistema.
4. O sistema valida as credenciais fornecidas (e-mail e senha).
5. Após a verificação bem-sucedida, o médico é direcionado para a página dos Utentes, tendo acesso às funcionalidades principais (menu) do sistema.

**Extensões:**
- 4a. Se o médico inserir credenciais incorretas, o sistema exibe uma mensagem de erro e permite que ele tente novamente.
- 4b. Se o médico se esquecer da sua palavra-passe, clica em “Esqueceu-se da palavra-passe?” e o sistema inicia o processo de recuperação da mesma (UC1.3) (não implementado)
