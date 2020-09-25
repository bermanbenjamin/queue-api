# API QUEUE

## API RPC para facilitar o gerenciamento de uma fila de pessoas!

<h4 align="center"> 
	🚧  Node API 🚀 
</h4>

## Endpoints

### Create User

\$ Recebe nome, email e genero no corpo da requisição e cadastras o usuário caso não esteja cadastrado
e devolve o Usuário como resposta

\$ http://localhost:3000/createUser

\$ Exemplo de corpo:
{
"name": "berman",
"email": "bermanschultz@mail.com",
"gender": "male"
}

### Add to Line

\$ Esse metódo deve receber o id do usuário a ser adicionado à fila e deve retornar a posição em que ele está na fila.

\$ http://localhost:3000/addToLine/:id

### Find Position

\$ Esse metódo deve receber o e-mail de um usuário e retornar a posição dele na fila.

\$ http://localhost:3000/findPosition

\$ \$ Exemplo de corpo:
{
"email": "bermanschultz@mail.com",
}

### Show Line

\$ Esse metódo deve retornar uma lista de usuários (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

\$ http://localhost:3000/showLine

### Filter Line

\$ Esse metódo deve receber um gênero de usuário e retornar uma lista de usuários com aquele gênero (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

\$ http://localhost:3000/filterLine/:gender

### Pop Line

\$ Esse metódo deve retirar da fila a pessoa na primeira posição e retorna-la.

\$ http://localhost:3000/popLine

### Features

- [x] Create User
- [x] Add To Line
- [x] Find Position
- [x] Show Line
- [x] Filter Line
- [x] Pop Line
- [x] Validations

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

#### Clone este repositório

\$ git clone <https://github.com/bermanbenjamin/queue-api.git>

#### Acesse a pasta do projeto no terminal/cmd

\$ cd queue-api

#### Instale as dependências

\$ npm install

#### Execute a aplicação em modo de desenvolvimento

\$ npm start

#### O servidor inciará na porta:3000 - acesse <http://localhost:3000>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com)

### Autor

Berman Schultz
