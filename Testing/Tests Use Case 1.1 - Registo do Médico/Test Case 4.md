# Test Case #4: Verificação do campo "Endereço de E-mail"

## Pré-condições

- O utilizador abriu o pop-up de Registo
- Todos os outros campos estão preenchidos.
- O utilizador já inseriu corretamente o Nome Completo e Número de Cédula Profissional.

## Passos

1. O utilizador insere diferentes formatos de endereços de e-mail para testar a validação.
2. Clica no botão "Registar".

## Resultado esperado

- O sistema deve validar o formato do e-mail sem verificar a existência do mesmo.
- Uma mensagem de erro será exibida caso os requisitos não sejam atendidos.

## Execuções

- Execução 1: Não Ok, o sistema aceita e-mails sem o símbolo "@".
- Execução 2: Não Ok, o sistema aceita e-mails sem um domínio.
- Execução 3: Ok, o sistema aceita apenas e-mails em formato válido.
