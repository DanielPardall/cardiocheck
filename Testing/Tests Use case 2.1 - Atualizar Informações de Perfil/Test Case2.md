# Test Case #2: Alteração do contacto

## Pré-condições

- O utilizador tem login efetuado.
- O utilizador encontra-se na página de edição dos seus dados pessoais.

## Passos

1. O utilizador insere um contacto.
2. O utilizador seleciona a opção "Guardar".

## Resultado esperado

- Aparece um aviso que confirma que a ação do utilizador foi realizada com sucesso.

## Execuções

- Execução 1: Ok, o aviso de confirmação é exibido corretamente.
- Execução 2: Não ok, aparece um aviso de falha que indica que o contacto tem de ter 9 dígitos.
- Execução 3: Não ok, aparece um aviso de falha que indica um erro a atualizar os dados.