const User = require("../models/user");
const UserRepository = require("../repositories/UserRepository");

exports.createUser = function (req, res) {
  const { name, email, gender } = req.body;


  if (UserRepository.findUser(name, email) == false) {
    let user1 = new User(name, email, gender);

    UserRepository.saveUser(user1, name);

    return res.json(user1);
  } else res.send("user ja existe");
};
