const User = require("../models/user");
const UserRepository = require("../repositories/UserRepository");

exports.createUser = function (req, res) {
  const { name, email, gender } = req.body;

  const user1 = new User(name, email, gender);

  UserRepository.saveUser(user1);

  return res.json(user1);
};


