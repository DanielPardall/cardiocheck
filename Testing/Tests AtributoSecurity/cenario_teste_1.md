# Cenário de Teste de Segurança 1: Acesso Direto às Rotas Sem Autenticação.

## Pré-Condições

- O sistema possui o decorator @login_required aplicado às rotas que requerem autenticação.

## Passos

1. Um utilizador não autenticado tenta acessar diretamente a um URL protegido da aplicação no browser.
2. O sistema verifica se o utilizador possui uma sessão autenticada ativa.
3. Caso não esteja autenticado, o sistema redireciona o usuário para a página de login.

## Resultado Esperado

- O utilizador não autenticado é redirecionado para a página de login ao tentar acessar uma rota protegida. 
- A tentativa de acesso direto é negada.

## Execuções

##TODO