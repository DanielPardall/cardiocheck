# Test Case #11: Verificação de erro na base de dados

## Pré-condições

- O utilizador preencheu o formulário corretamente e submeteu o registo.

## Steps

1. O utilizador insere corretamente os dados
2. Clica no botão "Registar".

## Resultado esperado

O sistema deve interceptar qualquer exceção originada da base de dados e comunicar o erro ao utilizador. Erros que podem desencadear esta ação incluem, mas não se limitam a:

- Restrições de integridade impostas pela base de dados.
- Violações das regras de validação dos dados, ou seja, se os dados não estiverem de acordo com os tipos de dados esperados pelas colunas da base de dados.
- Dificuldades de conexão ou falhas de comunicação com a base de dados.

## Execuções

- Execução 1: Não Ok, ao tentar registar o nome 'João', que contém acento (antes o sistema não aceitava), o sistema falha em notificar o utilizador sobre o erro relacionado com a base de dados.
- Execução 2: Ok, o sistema informa o erro de base de dados ao utilizador.
