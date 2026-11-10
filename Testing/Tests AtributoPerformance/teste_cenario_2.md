# Cenário de Teste de Performance 2: Desempenho do Sistema durante a requisição de 10 previsões de diagnóstico por segundo.

## Pré-Condições

- Os utilizadores/médicos têm login efetuado.

## Passos

1. Os médicos realizam os 10 pedidos de previsões de diagnóstico para os seus utentes.
2. O sistema irá processar os 10 pedidos fornecidos pelos médicos.
3. O sistema exibe os 10 resultados para cada médico, especificamente.

## Resultado Esperado

- O sistema irá indicar os 10 resultados da previsão de risco, individualmente para cada médico em menos de 1 segundo.

## Execuções

- Execução 1: Não ok, o sistema não apresenta os 10 resultados.
- Execução 2: O sistema apresenta os 10 resultados mas passado o segundo de espera. 
- Execução 3: Ok, o sistema apresenta os 10 resultados em menos de 1 segundo, para cada médico.