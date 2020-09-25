const Users = require("../db/users").users;

exports.saveUser = function (user) {
  Users.push(user);
};

exports.findById = function (id) {
  return Users.find((user) => user.id == id);
};
