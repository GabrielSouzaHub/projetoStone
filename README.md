#  <img align="center" src = "./images/logo_OX.png" alt="Rosto touro Ox Fundraising" width="50px" heigth="50px">  Projeto Stone Ox Fundraising 

<p align="center">
    <img src ="./images/logo_ox.trans.png" alt="Touro Ox fundraising">
</p>
   
## 📖 Sumário


<summary>Veja mais</summary>

1.  [O que é o projeto](https://github.com/GabrielSouzaHub/projetoStone#O-que-%c3%a9-o-projeto)
2.  [O que faz](https://github.com/GabrielSouzaHub/projetoStone#O-que-faz)
3.  [O que é uma api](https://github.com/GabrielSouzaHub/projetoStone#O-que-%c3%a9-uma-api)
4.  [Como está funcionando a api](https://github.com/GabrielSouzaHub/projetoStone#Como-est%c3%a1-funcionando-esta-api)
5.  [Heroku](https://github.com/GabrielSouzaHub/projetoStone#Heroku)
6.  [Como baixar e rodar o projeto](https://github.com/GabrielSouzaHub/projetoStone#Como-baixar-e-rodar-o-projeto)
7.  [Rotas disponíveis](https://github.com/GabrielSouzaHub/projetoStone#Rotas-dispon%c3%adveis)
8.  [Tecnologias utilizadas](https://github.com/GabrielSouzaHub/projetoStone#Tecnologias-utilizadas)
9.  [Config Jest](https://github.com/GabrielSouzaHub/projetoStone#Config-Jest)
10. [Contribuentes](https://github.com/GabrielSouzaHub/projetoStone#Contribuintes)
11. [Stone](https://github.com/GabrielSouzaHub/projetoStone#Stone)
</details>

# O que é o projeto

Este projeto é o back-end de uma aplicação web chamada [Ox fundraising](https://oxfundraising.vercel.app/), cujo objetivo é gerenciar "vaquinhas". Projeto fruto de uma mentoria da Stone com o Resilia.

# O que faz

Com o back-end podemos fazer consultas de dados já inseridos no projeto e/ou inserir novos.
Pode-se cadastrar usuários e "vaquinha";
Fazer transações da coins do usuário para a "vaquinha";
Alterar dados do usuário, caso o mesmo precise, assim como da vaquinha.

# O que é uma api

API é um conjunto de padrões ou rotinas que são disponibilizadas por uma aplicação, possibilitando que outra aplicação possa consumir a API de forma que tire proveito de suas funcionalidades.

# Como está funcionando esta api

Esta API foi desenvolvida em Node.JS, TypeORM, Express e PostgreSQL, tendo seu deploy feito no Heroku junto com o addons PostgreSQL disponibilizado pelo próprio heroku.

# Heroku

Heroku é uma plataforma que disponibiliza em nuvem a hospedagem de uma aplicação back-end.<br>
[Acesse nossa API](https://fundraisingoxdev.herokuapp.com/users) para ver seu funcionamento no mesmo.

# 💻 Como Baixar e rodar o Projeto

1. 📌 Clone o projeto

```Shell
git clone https://github.com/GabrielSouzaHub/projetoStone.git
```

2. 📌 Em seu terminal. Instale as dependências

```Shell
npm install
```

3. 📌 Para rodar o projeto utilize

```Shell
npm start
```

4. 📌 Acesse

```Shell
localhost:8080
```

# 🛣️ Rotas disponíveis

## 📌 Rotas **Users**

### Rotas GET

> Rota com intuito de encontrar um usuário pelo id
> <br> /users/:id

> Rota com intuito de encontrar todos usuários
> <br> /users/

### Rotas POST

> Rota com intuito de criar um usuário
> <br> /users/
> Exemplo de Post Users:
```Shell
{
"email": "nomeDeAlguemgmail.com",
"profile_image": "https://images.pexels.com/photos/7467939/pexels-photo-7467939.jpeg?auto=compress&cs=tinysrgb&h=130"
}
```

### Rotas PUT

> Rota com intuito de atualizar um usuário(localizado pelo id)
> <br> /users/:id

### Rotas DELETE

> Rota com intuito de deletar um usuário(localizado pelo id)
> <br> /users/:id

## 📌 Rotas **Fundraising**

### Rotas GET

> Rota com intuito de encontrar todas vaquinhas
> <br> /fundraising/

### Rotas POST

> Rota com intuito de criar uma vaquinha
> <br> /fundraising/
> Exemplo de Post Vaquinha:

```Shell
{
 "fundraising_name":"Vaquinha pra comprar vacina do covid",
 "description":"Vaquinha com intuito de vacinar a população",
 "image":"https://images.pexels.com/photos/7467936/pexels-photo-7467936.jpeg?auto=compress&cs=tinysrgb&h=350",
 "video":"Not found",
 "value_donated":0,
 "goal_meta":20000,
 "validity":"10-27-2021",
 "user_id": "< Id de um user existente >"
}
```

### Rotas PUT

> Rota com intuito de deletar uma vaquinha(localizado pelo id)
> <br> /fundraising/:id

## 📌 Rotas **Transaction**

### Rotas GET

> Rota com intuito de encontrar todas transações
> <br> /transaction"

> Rota com intuito de criar uma transação
> <br> /transaction

# 🛠️ Tecnologias utilizadas
1. [TypeScript](https://www.typescriptlang.org/)
2. [Node.JS](https://nodejs.org/en/)
3. [TypeORM](https://typeorm.io/#/)
4. [Express](https://expressjs.com/pt-br/)
5. [PostgreSQL](https://www.postgresql.org/)
6. [Jest](https://jestjs.io/pt-BR/docs/getting-started)
# 🃏 Config jest
    
  Jest é a lib que usamos para testar nossa aplicação, ao dar o comando no terminal.
  ```
  yarn jest --init
  ```
  Criasse o arquivo jest.congif, como o projeto está em TypeScript é necessário alterar a linha preset, para:
  `preset: 'ts-jest`
  
  E para fazer os testes do projeto, basta apenas inserir no terminal o comando 
  ```
  npm run test
  ```

# 🙍 Contribuintes
   * [Paulo Ricardo](https://github.com/Paulo-oRicardo)     [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/paulo-yokoyama/)](https://www.linkedin.com/in/paulo-yokoyama/)
   
   
   * [Gabriel Souza](https://github.com/GabrielSouzaHub)     [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabrielsouzadev/)](https://www.linkedin.com/in/gabrielsouzadev/)

# 💚 Stone

## Produtos financeiros muito além da Maquininha

Conectamos seu negócio com soluções de pagamento e gestão à um serviço local, que fala sua língua e te conhece pelo nome. Vem ser Stone.
