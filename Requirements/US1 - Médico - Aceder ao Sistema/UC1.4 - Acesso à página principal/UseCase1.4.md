## UC 1.4 - Acesso à Página Principal

**Descrição:** Este caso de uso descreve o processo pelo qual um médico acede à página principal do sistema para usar as funcionalidades disponíveis.

**Ator Primário:** Médico

**Escopo:** Sistema de gestão do médico

**Nível:** Sea level

**Stakeholders e Interesses:**
- **Médicos:** Querem um acesso centralizado às funcionalidades do sistema para gerir o seu perfil, as configurações da conta, e interagir com os dados dos utentes de forma eficiente e segura.

**Pré-condições:**
- O médico possui o login efetuado..
- A página principal do sistema está operacional e acessível.

**Cenário Principal de Sucesso:**
1. O médico encontra-se na página principal ou em outra página do sistema.
2. Clica no icon de uma lista, situado na barra lateral esquerda, para retornar à página principal.
3. Na página principal, visualiza as opções disponíveis: editar perfil, definições da conta, pesquisa de utentes, e inscrição de novos utentes.
4. Escolhe uma das funcionalidades para prosseguir com a respectiva tarefa no sistema.

**Extensões:**
- 2a. Caso o médico clique no ícone da lista e não seja redirecionado para a página principal, deve ser exibida uma mensagem de erro, informando que a funcionalidade está indisponível no momento.
- 4a. Se, ao escolher editar o perfil, o médico não for redirecionado para a página de edição para atualizar seus dados, uma mensagem de erro deve ser apresentada.
- 4b. Se, ao selecionar as definições da conta, o médico não for redirecionado para a página onde pode alterar a palavra-passe, terminar a sessão ou eliminar a conta, uma mensagem de erro deve ser exibida.
- 4c. Se o médico tentar realizar a pesquisa de utentes e não conseguir inserir o número de saúde no campo designado, deve ser exibida uma mensagem de erro.
- 4d. Se o médico clicar em “Registrar Utente” e não for direcionado para o processo de inscrição no sistema, deve ser apresentada uma mensagem indicando o problema.
