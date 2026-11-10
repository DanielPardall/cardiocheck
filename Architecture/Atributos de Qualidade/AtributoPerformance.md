## Cenário de Qualidade de Perfomance 1: Desempenho do sistema em condições normais

- **Origem do Estímulo**: Um médico, que é um usuário autorizado do sistema.

- **Estímulo**: O médico insere um conjunto completo de dados clínicos de um utente no sistema para obter uma previsão de risco de doença cardíaca.

- **Ambiente**: O sistema está a operar sob carga de trabalho normal, sem interrupções ou manutenção em andamanto.

- **Artefato**: Serviço de previsão de risco de doença cardíaca do sistema.

- **Resposta**: O sistema processa a entrada de dados, calcula a previsão de risco utilizando o modelo de machine learning, e exibe os resultados na interface do usuário.

- **Medida de Resposta**: A latência, ou tempo de resposta do sistema desde a submissão da requisição até a apresentação dos resultados, deve ser inferior a 3 segundos em 95% das requisições sob condições normais.

### Cenário de Teste:
https://gitlab.com/dei-uc/pecd2024/pl1-g4/-/blob/main/Testing/Tests%20AtributoPerformance/teste_cenario_1.md?ref_type=heads


## Cenário de Qualidade de Performance 2: Desempenho do sistema durante a requisição de 10 previsões de diagnóstico por segundo.

- **Origem do Estímulo**: Vários médicos realizam pedidos de previsões de diagnóstico.

- **Estímulo**: Necessidade da requisição da previsão de risco cardíaco.

- **Ambiente**: Interface onde o utilizador solicita a previsão.

- **Artefato**: Infraestrutura de hospedagem e processamento do sistema.

- **Resposta**: O sistema ajusta dinamicamente sua capacidade, potencialmente através da alocação de recursos adicionais (escalabilidade automática), para processar todas as requisições. Implementa técnicas eficientes de gestão de fila para garantir que todas as requisições sejam processadas de forma justa e eficiente.

- **Medida de Resposta**: O sistema deve ser capaz de processar 50 pedidos de previsão de diagnósitco por segundo, com 90% dos pedidos a serem processados em menos de 1 segundo. A eficácia da resposta será validada através de testes de carga simulados.

### Cenário de Teste:
https://gitlab.com/dei-uc/pecd2024/pl1-g4/-/blob/main/Testing/Tests%20AtributoPerformance/teste_cenario_2.md?ref_type=heads 


## Cenário de Qualidade de Performance 3: Desempenho do sistema durante o registo de vários utilizadores. (FEITO)

- **Origem do Estímulo**: Vários médicos realizam o pedido de registo na página de registo quase ou simultanemente.

- **Estímulo**: Necessidade de registo simultâneo de vários utilizadores.

- **Ambiente**: Aplicação (Interface do Utilizador).

- **Artefato**: Página de registo do utilizador.

- **Resposta**: O sistema ajusta a sua capacidade de processamento para abranger vários registos durante períodos de tráfego elevado, utilizando técnicas de escalabilidade automática. Implementa um sistema eficiente de gestão de carga para garantir que os pedidos de registo sejam todos concretizados e durante um curto período de tempo.

- **Medida de Resposta**: O sistema deve ser capaz de processar pelo menos 5 registos de utilizadores simultanemente, sendo cada um completado em menos de 3 segundos.

### Cenário de Teste:
https://gitlab.com/dei-uc/pecd2024/pl1-g4/-/blob/main/Testing/Tests%20AtributoPerformance/teste_cenario_3.md?ref_type=heads 
