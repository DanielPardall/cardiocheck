# Test Case #5: Verificação do campo "Número de Telemóvel"

## Pré-condições

- O utilizador abriu o pop-up de Registo.
- Todos os outros campos estão preenchidos.
- O utilizador já inseriu corretamente o Nome Completo, Número de Cédula Profissional e E-mail.

## Passos

1. O utilizador insere diferentes números de telemóvel para testar a validação.
2. Clica no botão "Registar".

## Resultado esperado

- O sistema deve validar que o número de telemóvel tem exatamente 9 dígitos.
- Uma mensagem de erro será exibida caso os requisitos não sejam atendidos.

## Execuções

- Execução 1: Não Ok, o sistema aceita números com menos/mais de 9 dígitos.
- Execução 2: Ok, o sistema valida corretamente o número de telemóvel com 9 dígitos.
