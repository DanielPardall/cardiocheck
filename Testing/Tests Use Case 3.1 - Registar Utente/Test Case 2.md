# Test Case #2: Preenchimento completo do formulário de registo

## Pré-condições

- O utilizador deve estar no formulário de registo do utente.

## Passos

1. O utilizador preenche o formulário com dados em formatos específicos:
"Nome Completo" com caracteres não alfabéticos (Ex: António1 Monteiro99).
"Data de Nascimento" em um formato diferente de AAAA-MM-DD ou com uma data inválida (Ex: 20/1/2001, 2030-50-50).
"Número de Identificação Civil (NIC)" com menos ou mais de 8 dígitos ou com caracteres que não sejam dígitos (Ex: a12t12345l).
"Número de Utente de Saúde" e "Número de Telemóvel" com menos ou mais de 9 dígitos ou com caracteres que não sejam dígitos (Ex: a12t12345l).
"E-mail" com um formato inválido (Ex: antonio.com)
2. O utilizador clica no botão "Registar"

## Resultado esperado

- O sistema valida cada campo mencionado em cima de acordo com as regras especificadas e notifica o utilizador sobre quaisquer erros no formato.
