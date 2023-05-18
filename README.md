# Blogs API
![apresentação](/readme/cardProject/main.png)

# Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

# Índice

* [Título e Imagens Home](#blogs-api)
* [tecnologias utilizadas](#tecnologias-utilizadas)
* [Índice](#índice)
* [Descrição do projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-projeto)
* [Funcionalidade do projeto](#🔨-funcionalidade-do-projeto)
* [Acesso ao Projeto](#acesso-ao-projeto)

# Descrição do Projeto

Projeto desenvolvido na escola Trybe, neste projeto eu desenvolvi os middleware, controllers, services, routers, migrations, models e utils.

esse projeto é uma api de blog, onde é possível se cadastra, fazer login, criar um post, editar, apagar e ler.

projeto focado no beck-end.

## fazendo login 
![rota Login](/readme/images/rotaLogin.png)

## adicionando o token
![token](/readme/images/headersToken.png)

## listando todos os usuários
![listando users](/readme/images/getAll.png)

# Status do Projeto

> 💹 Alpha 💹

# 🔨 Funcionalidade do projeto

<details>
<summary><strong>Criar um usuário</strong></summary>

Na rota http://localhost:3002/user method POST

corpo da requisição
```json
{
  "display_name": "SeuNomeAqui",
  "email": "seuEmailAqui@gmail.com",
  "password": "suaSenhaAqui",
  "image": "url da imagem"
}
```
A resposta vai ser um token com validade de 10 minutos
</details>
<details>
<summary><strong>Fazer login</strong></summary>

Na rota http://localhost:3002/login method POST

corpo da requisição
```json
{
  "email": "seuEmailAqui@gmail.com",
  "password": "suaSenhaAqui",
}
```
só é possível fazer login com usuário cadastrado
A resposta vai ser um token com validade de 10 minutos
</details>
<details>
<summary><strong>Criar um post</strong></summary>

Na rota http://localhost:3002/post method POST

corpo da requisição
```json
{
  "title": "Titulo do post",
  "content": "Conteúdo do post",
  "categoryIds": [1, 2] // id das categorias que tem ou foram criadas na tabela categories
}
```
só é possível se informa o token no headers da requisição e ele for valido.
</details>
<details>
<summary><strong>Editar um post</strong></summary>

Na rota http://localhost:3002/post method PUT

corpo da requisição
```json
{
  "title": "Novo titulo do post ou não",
  "content": "Novo Conteúdo do post ou não",
}
```
só é possível se informa o token no headers da requisição ele for valido e o post se do seu usuário,
</details>
<details>
<summary><strong>Deletar um post</strong></summary>

Na rota http://localhost:3002/post/id_Do_Post method DELETE

só é possível se informa o token no headers da requisição ele for valido e o post se do seu usuário,
</details>
<details>
<summary><strong>Buscar Todos Post</strong></summary>

Na rota http://localhost:3002/post method GET

só é possível se informa o token no headers da requisição ele for valido.
</details>
<details>
<summary><strong>Buscar post pelo id</strong></summary>

Na rota http://localhost:3002/post/id method GET

só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Buscar post pelo titulo ou conteúdo</strong></summary>

Na rota http://localhost:3002/post/search?q="titulo_ou_conteúdo_buscado" method GET

só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Buscar todos Usuários cadastrados</strong></summary>

Na rota http://localhost:3002/user method GET

só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Buscar usuária pelo id</strong></summary>

Na rota http://localhost:3002/user/id_Do_Usuário method GET

só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Deleta usuária</strong></summary>

Na rota http://localhost:3002/user/me method DELETE

só é possível se informa o token no headers da requisição ele for valido.

OBS: essa rota vai deleta o usuário que fez login.
</details>
<details>
<summary><strong>Criar categorias</strong></summary>

Na rota http://localhost:3002/categories method POST

```json
{
  "name": "Nome da categoria"
}
```
só é possível se informa o token no headers da requisição ele for valido.
</details>
<details>
<summary><strong>Busca por todas categorias</strong></summary>

Na rota http://localhost:3002/categories method GET

só é possível se informa o token no headers da requisição ele for valido.
</details>

# Acesso ao projeto

você precisa ter npm, node.js, docker e git instalados.

renome o arquivo env.example para .env.

recomendo utilizar a extensão do VSCode thunder Client.

1° Clone o Projeto

```bash
git clone git@github.com:EversonDias/blogs-api.git 
```

2° Entre no projeto

```bash
cd blogs-api
```

3° Instale as dependências

```bash
npm install
```

4° Iniciar o Docker

```bash
docker-compose up -d
```
OBS: o docker-compose tem estar na versão 1.29.

5° start e popule o banco de dados

```bash
env $(cat .env) npm run startdb
```
OBS: na primeira vez pode dar erro de conexão é so espera 3 minutos e tenta novamente.

6° inicie o servidor

```bash
env $(cat .env) npm run dev
```
