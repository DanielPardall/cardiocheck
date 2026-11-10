# Test Case #6: Verificação do campo "Palavra-Passe"

## Pré-condições

- O utilizador abriu o pop-up de Registo.
- Todos os outros campos estão preenchidos.
- O utilizador já inseriu corretamente todos os campos anteriores.

## Passos

1. O utilizador insere diferentes formatos de palavras-passe para testar a validação.
2. Clica no botão "Registar".

## Resultado esperado

- O sistema deve validar que a palavra-passe atenda aos requisitos de segurança.
- Uma mensagem de erro será exibida caso os requisitos não sejam atendidos.

## Execuções

- Execução 1: Não Ok, o sistema aceita palavra-passe com menos de 8 caracteres.
- Execução 2: Não Ok, o sistema aceita palavra-passe sem os caracteres obrigatórios.
- Execução 3: Ok, o sistema valida corretamente a palavra-passe conforme os requisitos.
