# Sumário
<details>
<summary>Veja mais</summary>

1.  [O que é o projeto](https://github.com/GabrielSouzaHub/projetoStone#O+que+%c3%a9+o+projeto)
2.  [O que faz](https://github.com/GabrielSouzaHub/projetoStone#O%20que%20faz)
3.  [O que é uma api](https://github.com/GabrielSouzaHub/projetoStone#O+que+%c3%a9+uma+api) 
4.  [Como está funcionando a api](https://github.com/GabrielSouzaHub/projetoStone#Como+est%c3%a1+funcionando+a+api)   
5.  [Heroku](https://github.com/GabrielSouzaHub/projetoStone#Heroku)  
6.  [Como baixar e rodar o projeto](https://github.com/GabrielSouzaHub/projetoStone#Como+baixar+e+rodar+o+projeto)       
7.  [Rotas disponíveis](https://github.com/GabrielSouzaHub/projetoStone#Rotas+dispon%c3%adveis) 
8.  [Tecnologias utilizadas](https://github.com/GabrielSouzaHub/projetoStone#Tecnologias+utilizadas) 
9.  [Config Jest](https://github.com/GabrielSouzaHub/projetoStone#Config+Jest) 
10. [Contribuentes](https://github.com/GabrielSouzaHub/projetoStone#Contribuentes) 
11. [Stone](https://github.com/GabrielSouzaHub/projetoStone#Stone) 
</details>

# O que é o projeto
Este projeto é o back-end de uma aplicação web chamada Ox fundraising, cujo objetivo é gerenciar vaquinhas. Projeto fruto de uma mentoria da Stone com o Resilia.
# O que faz
Com o back-end podemos fazer consultas de dados já inseridos no projeto ou inserir novos.
# O que é uma api
API é um conjunto de padrões ou rotinas que são disponibilizadas por uma aplicação, possibilitando que outra aplicação possa consumir a API de forma que tire proveito de suas funcionalidades.
# Como está funcionando esta api
Esta API foi desenvolvida em Node.JS, TypeORM, Express e PostgreSQL, tendo seu deploy feito no Heroku junto com o puglin de PostgreSQL.
# Heroku
Heroku é uma plataforma que disponibiliza em nuvem a hospedagem de uma aplicação back-end.<br>
[Acesse nossa API](https://fundraisingoxdev.herokuapp.com/users) para ver seu funcionamento no mesmo.
# Como Baixar e rodar o Projeto
1. Clone o projeto
```Shell
git clone https://github.com/GabrielSouzaHub/projetoStone.git
```
2. Instale as dependências
```Shell
npm install
```
3. Para rodar o projeto utilize
```Shell
npm start
```
4. Acesse
```Shell
localhost:8080
```
# Rotas disponíveis
## Rotas **Users**
### Rotas GET
>Rota com intuito de encontrar um usuario pelo id
<br> /users/:id

> Rota com intuito de encontrar todos usuários
<br> /users/

### Rotas POST
> Rota com intuito de criar um usuário
<br> /users/

### Rotas PUT
> Rota com intuito de atualizar um usuário(localizado pelo id)
<br> /users/:id

### Rotas DELETE
> Rota com intuito de deletar um usuário(localizado pelo id)
<br> /users/:id

## Rotas **Fundraising**
### Rotas GET
> Rota com intuito de encontrar todas vaquinhas
<br> /fundraising/

> Rota com intuito de criar uma vaquinha
<br> /fundraising/

## Rotas **Transaction**
### Rotas GET
> Rota com intuito de encontrar todas transações
<br> /transaction"

> Rota com intuito de criar uma transação
<br> /transaction

# Tecnologias utilizadas
1. Node.JS
2. TypeORM
3. Express
4. PostgreSQL
# Config jest

# Contribuintes
# Stone
## Produtos financeiros muito além da Maquininha
Conectamos seu negócio com soluções de pagamento e gestão à um serviço local, que fala sua língua e te conhece pelo nome. Vem ser Stone.