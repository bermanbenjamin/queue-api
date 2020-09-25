const UserRepository = require("../repositories/UserRepository");
const ListRepository = require("../repositories/ListRepository");

exports.addToLine = function (req, res) {
  const id = req.params.id;

  const user1 = UserRepository.findById(id);

  ListRepository.saveUser(user1);
  
  let position = ListRepository.indexOf(user1);

  res.send(`position of user in queue is = ${position}`);
};

exports.findPosition = function (req, res) {
  const { email } = req.body;

  const user = ListRepository.findByEmail(email);

  let position = ListRepository.indexOf(user);

  res.send(`position of user in queue is = ${position}`);
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

res.send(`${user} foi retirado da fila`);
};
