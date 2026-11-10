# Test Case #7: Verificação do campo "Confirmar Palavra-Passe"

## Pré-condições

- O utilizador abriu o pop-up de Registo.
- Todos os outros campos estão preenchidos.
- O utilizador já inseriu corretamente todos os campos anteriores, incluindo uma palavra-passe válida.

## Passos

1. O utilizador insere a confirmação da palavra-passe.
2. Clica no botão "Registar".

## Resultado esperado

- O sistema deve validar que as palavras-passe inseridas coincidam.
- Uma mensagem de erro será exibida caso as palavras-passe não coincidam.

## Execuções

- Execução 1: Não Ok, o sistema permite o registo com palavras-passe que não coincidem.
- Execução 2: Ok, o sistema impede o registo quando as palavras-passe não coincidem.
