global.counter = 0;

class User {
  constructor(name, email, gender) {
    this.id = global.counter++;
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
}

module.exports = User;

