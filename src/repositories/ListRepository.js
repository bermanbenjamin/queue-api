const List = require("../db/list").list;

exports.saveUser = function (user, id) {
  if (List.find((user) => user.id == id)) return null;
  else if (user == null) return null;
  else List.push(user);
};

exports.indexOf = function (user) {
  if (user == null) return null;
  return List.indexOf(user) + 1;
};

exports.findByEmail = function (email) {
  return List.find((user) => user.email == email);
};

exports.showLine = function () {
  const showList = [];

  List.forEach((user, index) => {
    showList.push({
      position: index,
      name: user.name,
      email: user.email,
      gender: user.gender,
    });
  });

  return showList;
};

exports.filterList = function (gender) {
  const showList = [];

  List.forEach((user, index) => {
    if (user.gender == gender) {
      showList.push({
        position: index,
        name: user.name,
        email: user.email,
        gender: user.gender,
      });
    }
  });
  return showList;
};

exports.popUser = function () {
  const user = List[0];

  List.shift();

  return user;
};
