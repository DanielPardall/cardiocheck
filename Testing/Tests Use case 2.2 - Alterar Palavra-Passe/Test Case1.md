# Test Case #1: Alteração da palavra-passe

## Pré-condições

- O utilizador tem login efetuado.
- O utilizador encontra-se na página correspondente à alteração da palavra-passe da sua conta.

## Passos

1. O utilizador insere a sua palavra-passe atual.
2. De seguida, o utilizador insere a sua nova palavra-passe.
3. O utilizador volta a digitar a sua nova palavra-passe no campo destinado à sua confirmação.
4. O utilizador seleciona a opção "Confirmar" para finalizar a sua ação.

## Resultado esperado

- Aparece um aviso que confirma que a ação do utilizador foi realizada com sucesso.

## Execuções

- Execução 1: Ok, o aviso de confirmação é exibido corretamente.
- Execução 2: Aparece um aviso de falha onde a nova palavra-passe inserida pelo utilizador não contém os requisitos obrigatórios.
- Execução 3: Aparece um aviso de falha onde as palavra-passes não coincidem.
