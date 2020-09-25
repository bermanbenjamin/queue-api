const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");
const ListController = require("./controllers/ListController");

// - Cria usuario
routes.post("/createUser", UserController.createUser);

// - Coloca um usuário na última posição da fila;
routes.get("/addToLine/:id", ListController.addToLine);

// - Retorna a posição de um usuário a partir de seu email;
routes.post("/findPosition", ListController.findPosition);

// - Retorna toda a fila atual;
routes.post("/showLine", ListController.showLine);

// - Lista os usuários filtrados a partir de um parâmetro;
routes.get("/filterLine/:gender", ListController.filterLine);

// - Tira a pessoa na primeira posição da fila;
routes.post("/popLine", ListController.popLine);

module.exports = routes;
