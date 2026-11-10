# Test Case #2: Verificação do campo "Nome Completo"

## Pré-condições

- O utilizador abriu o pop-up de Registo.
- Todos os outros campos estão preenchidos (sem verificação de se estão no formato correto, apenas se estão preenchidos).

## Passos

1. O utilizador insere diferentes formatos de nomes para testar a validação.
2. Clica no botão "Registar".

## Resultado esperado

- O sistema deve aceitar apenas letras (acentos e alguns caracteres especiais são permitidos) e espaços.
- Uma mensagem de erro será exibida caso os requisitos não sejam atendidos.

## Execuções

- Execução 1: Não Ok, o sistema não aceita nomes com espaços.
- Execução 2: Não Ok, o sistema não aceita nomes com acentos.
- Execução 3: Ok, o sistema aceita nomes com letras, espaços e acentos.
