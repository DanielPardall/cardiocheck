# Test Case #13: Disponibilidade do botão "Registar" após tentativa de registo mal sucedida

## Pré-condições

- O utilizador clicou uma primeira vez no botão "Registar", e uma mensagem de erro foi exibida.

## Passos

1. O utilizador preenche o formulário de registo e submete-o.
2. O sistema apresenta uma mensagem de erro.
3. Observar o comportamento do botão "Registar" após a apresentação da mensagem de erro.

## Resultado esperado

Após apresentar a mensagem de erro, o sistema deve garantir que o botão "Registar" esteja disponível para uma nova tentativa de registo.

## Execuções

- Execução 1: Não Ok, o botão "Registar" permanece desativado após a mensagem de erro.
- Execução 2: Ok, o botão "Registar" fica disponível novamente permitindo ao utilizador corrigir os dados e tentar o registo outra vez.
