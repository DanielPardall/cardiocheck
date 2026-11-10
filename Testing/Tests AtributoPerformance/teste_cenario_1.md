# Cenário de Teste de Performance 1: Desempenho do Sistema em Condições Normais

## Pré-Condições

- O utilizador/médico tem login efetuado.

## Passos

1. O médico insere os dados clínicos de um utente.
2. O sistema irá processar os dados de entrada fornecidos pelo médico.
3. O sistema calcula a previsão de risco utilizando o modelo de machine learning.
4. O sistema exibe os resultados.

## Resultado Esperado

- O sistema irá indicar o resultado da previsão de risco na interface do usuário em menos de 3 segundos.

## Execuções

- Execução 1: Não ok, o sistema não apresenta os resultados.
- Execução 2: O sistema apresenta o resultado, mas passado os 3 segundos de espera. 
- Execução 3: Ok, o sistema apresenta o resultado em menos de 3 segundos.
