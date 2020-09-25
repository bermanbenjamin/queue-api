const Users = require("../db/users").users;

// - Verifica se já a um usuario existente em data
exports.findUser = function (name, email) {
  if (Users.length == 0) return false;

  if (
    Users.find(
      (user) =>
        user.name == name || user.email == email 
    ) == undefined
  )
    return false;
  else return true;
};

// - Salva Usuario
exports.saveUser = function (user) {
  Users.push(user);
};

exports.findById = function (id) {
  return Users.find((user) => user.id == id);
};
