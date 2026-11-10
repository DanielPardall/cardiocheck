## UC 2.3 - Encerrar Sessão

**Descrição:** Este caso de uso descreve o processo de um médico finalizar a sua sessão no sistema

**Ator Primário:** Médico

**Escopo:** Sistema de gestão de conta do médico

**Nível:** Sea level

**Stakeholders e Interesses:**
- *Médicos:* Desejam ter um processo de logout fácil e seguro que proteja os seus dados e os impeça de deixar as suas sessões ativas sem intenção.

**Pré-condições:**
- O médico deve ter a sessão iniciada no sistema.

**Cenário Principal de Sucesso:**
1. O médico acede à página de perfil no sistema.
2. O médico clica no botão "Encerrar Sessão" na interface do sistema.
3. O sistema confirma se o médico deseja realmente encerrar a sessão.
4. O sistema encerra a sessão do médico e redireciona-o para a página inicial (login e registo).

**Extensões:**
- 3a. Se o médico cancelar o término da sessão, o sistema cancela o processo e retorna à página inicial.