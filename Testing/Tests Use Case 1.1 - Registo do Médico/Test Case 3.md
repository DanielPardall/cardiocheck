# Test Case #3: Verificação do campo "Número de Cédula Profissional"

## Pré-condições

- O utilizador abriu o pop-up de Registo.
- Todos os outros campos estão preenchidos.
- Preencheu o Nome Completo corretamente.

## Passos

1. O utilizador insere diferentes sequências de caracteres no campo de número de cédula profissional.
2. Clica no botão "Registar".

## Resultado esperado

- O sistema deve validar que o campo só pode conter dígitos.
- Uma mensagem de erro será exibida caso os requisitos não sejam atendidos.

## Execuções

- Execução 1: Não Ok, o sistema aceita letras no campo de número de cédula.
- Execução 2: Não Ok, o sistema aceita caracteres especiais no campo de número de cédula.
- Execução 3: Ok, o sistema rejeita qualquer coisa que não seja um dígito.
