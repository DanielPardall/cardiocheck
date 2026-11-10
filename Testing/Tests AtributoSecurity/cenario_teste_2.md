## Cenário de Teste de Segurança 2: Encriptação das Senhas de Usuários e Médicos na Base de Dados.

## Pré-Condições

- As senhas dos usuários e médicos devem estar armazenadas de forma encriptada na base de dados.

## Passos

1. Um administrador do sistema ou um script automatizado tenta acessar e visualizar as senhas na base de dados.
2. O sistema verifica a forma como as senhas estão armazenadas, observando se estão ou não encriptadas.
3. A visualização dos dados é feita para confirmar se a encriptação foi aplicada corretamente.

## Resultado Esperado

- As senhas dos usuários e médicos devem aparecer como strings encriptadas, sem possibilidade de serem lidas ou decifradas facilmente, garantindo a segurança e a privacidade.

## Execuções:
TODO