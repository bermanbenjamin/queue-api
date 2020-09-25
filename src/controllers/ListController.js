const UserRepository = require("../repositories/UserRepository");
const ListRepository = require("../repositories/ListRepository");

exports.addToLine = function (req, res) {
  const id = req.params.id;

  const user1 = UserRepository.findById(id);

  if (user1 == null) res.send("Usuario não encontrado");

  ListRepository.saveUser(user1, id);

  let position = ListRepository.indexOf(user1);

  if (position == null) res.send("Usuario ja adicionado a fila");
  else res.send(`position of user in queue is = ${position}`);
};

exports.findPosition = function (req, res) {
  const { email } = req.body;

  const user = ListRepository.findByEmail(email);

  let position = ListRepository.indexOf(user);

  if (position == null)
    res.send(`O usuário não se encontra na fila`);
  else res.send(`position of user in queue is = ${position}`);
};

exports.showLine = function (req, res) {
  const list = ListRepository.showLine();

  res.send(JSON.stringify(list));
};

exports.filterLine = function (req, res) {
  const gender = req.params.gender;

  const filterList = ListRepository.filterList(gender);

  res.send(JSON.stringify(filterList));
};

exports.popLine = function (req, res) {
  const user = ListRepository.popUser();

  if (user == null) res.send("Nenhum usuário na fila");
  else res.send(JSON.stringify(user));
};
