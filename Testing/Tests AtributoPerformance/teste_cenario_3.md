# Cenário de Teste de Segurança 3: Desempenho do sistema durante o registo de vários utilizadores.

## Pré-Condições
- Vários utilizadores (médicos) acederam à página inicial da aplicação.

## Passos
1. 5 utilizadores realizam os pedidos de registo na página de registo da aplicação.
2. O sistema processa os 5 pedidos de registo por parte dos 5 utilizadores.
3. O sistema regista os 5 utilizadores na base de dados da aplicação.

## Resultado Esperado
- O sistema irá registar os 5 utilizadores no sistema, em menos de 3 segundos.

## Ferramentas e Execução de Teste: 
- Utilizado um script **Selenium** para simular 5 registos de utilizadores em múltiplos browsers (encontra-se em "Code/QualityTestes/performance.py")

## Execuções
- Execução 1: O sistema concluiu o registo dos 5 utilizadores quase simultaneamente, e estes puderam ser observados na base de dados do sistema.