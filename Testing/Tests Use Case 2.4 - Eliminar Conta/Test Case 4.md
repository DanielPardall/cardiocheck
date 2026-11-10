# Test Case #4: Verificação das credenciais após a eliminação da conta

## Pré-condições

- O utilizador eliminou a conta e foi redirecionado para a página inicial de login/registo.

## Passos

1. O utilizador tenta fazer login com as credenciais da conta eliminada.

## Resultado esperado

- O login deve falhar com uma mensagem indicando que o e-mail ou a palavra-passe estão incorretos.

## Execuções

- Execução 1: Não Ok, o sistema permite o login com as credenciais da conta eliminada.
- Execução 2: Ok, o sistema rejeita o login e informa que as credenciais estão incorretas.
