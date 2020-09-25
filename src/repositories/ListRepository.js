const List = require("../db/list").list;

exports.saveUser = function (user) {
  List.push(user);
};

exports.indexOf = function (user) {
  return List.indexOf(user) + 1;
};

exports.findByEmail = function (email) {
  return List.find((user) => user.email == email);
};

exports.showLine = function () {
  const showList = List;

  return showList;
};

exports.filterList = function (gender) {
  const showList = [];

  for (let i = 0; i < List.length; i++) {
    const element = List[i];
    if (element.gender === gender) {
      showList.push(element);
    }
  }

  return showList;
};

exports.popUser = function () {
  const user = List[0];

  List.shift();

  return user;
};
