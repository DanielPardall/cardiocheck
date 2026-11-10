
## Cenário de Qualidade de Segurança 1: Redirecionamento e Notificação de Acesso Não Autorizado

- **Fonte do Estímulo**: Um utilizador não autenticado tenta aceder diretamente a uma página protegida.

- **Estímulo**: Acesso direto a uma URL que requer autenticação sem estar logado.

- **Ambiente**: Interface web.

- **Artefato**: Sistema de gestão de páginas e autenticação.

- **Resposta**: O sistema identifica que o utilizador não possui sessão válida, redireciona para a **página de login** e regista a tentativa de acesso.

- **Medida de Resposta**: A resposta do sistema ocorre em menos de 5 segundos após a tentativa de acesso, garantindo a negação rápida do acesso não autorizado e o redirecionamento correto para a página de login.

### Cenário de Teste: 
https://gitlab.com/dei-uc/pecd2024/pl1-g4/-/blob/main/Testing/Tests%20AtributoSecurity/cenario_teste_1.md#passos



## Cenário de Qualidade de Segurança 2: Verificação da Encriptação de Senhas

- **Fonte do Estímulo**: O utilizador introduz a palavra-passe quando está a realizar o seu registo na aplicação.

- **Estímulo**: Encriptação de senhas armazenadas na base de dados.

- **Ambiente**: Sistema de gestão de base de dados.

- **Artefato**: Banco de dados onde as senhas dos utilizadores são armazenadas.

- **Resposta**: O sistema confirma que todas as senhas estão armazenadas em formato encriptado e não são acessíveis em texto claro.

- **Medida de Resposta**: Verificação de que nenhuma senha pode ser visualizada em texto claro, de modo a que se perceba a palavra-passe.

### Cenário de Teste:
https://gitlab.com/dei-uc/pecd2024/pl1-g4/-/blob/main/Testing/Tests%20AtributoSecurity/cenario_teste_2.md?ref_type=heads