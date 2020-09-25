const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");
const ListController = require("./controllers/ListController");

routes.post("/", UserController.createUser);

routes.get("/addToLine/:id", ListController.addToLine);
// - Coloca um usuário na última posição da fila;

routes.post("/findPosition", ListController.findPosition);
// - Retorna a posição de um usuário a partir de seu email;

routes.get("/showLine", ListController.showLine);


routes.get("/filterLine/:gender", ListController.filterLine);
// - Lista os usuários filtrados a partir de um parâmetro;

routes.get("/popLine", ListController.popLine);
// - Tira a pessoa na primeira posição da fila;

module.exports = routes;
