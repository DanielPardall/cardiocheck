# Test Case #14: Ocultação automática das mensagens de erro

## Pré-condições

- O utilizador recebe uma mensagem de erro durante o processo de registo.

## Passos

1. O utilizador submete intencionalmente o registo com algum erro.
2. A mensagem de erro é exibida para o utilizador.
3. Observar se a mensagem de erro desaparece automaticamente após alguns segundos.

## Resultado esperado

As mensagens de erro devem ser removidas da tela automaticamente após 3 segundos para melhorar a "experiência" do utilizador.

## Execuções

- Execução 1: Não Ok, a mensagem de erro permanece visível indefinidamente.
- Execução 2: Ok, a mensagem de erro desaparece após alguns segundos.
