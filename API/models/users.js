const bcrypt = require('bcrypt');

// const static userData = [];
const userData = [];

class User {
  constructor(firstName, lastName, password, email, address, isAdmin) {
    // this.id = createId();
    this.first_name = firstName;
    this.last_name = lastName;
    this.password = password;
    this.email = email;
    this.address = address;
    this.is_admin = isAdmin;
  }

  get first_name() {
    return this._first_name;
  }

  set first_name(value) {
    this._first_name = value;
  }

  get last_name() {
    return this._last_name;
  }

  set last_name(value) {
    this._last_name = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = this.encrypt(value);
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  encrypt(value) {
    const hash = bcrypt.hashSync(value, 10);
    return hash;
  }

  static decrypt(hash, value) {
    if (bcrypt.compareSync(value, hash)) {
      return true;
    }
    return false;
  }

  static logInUser(savedUser, authenticatingUser) {
    if (savedUser.email === authenticatingUser.email) {
      const result = this.decrypt(savedUser.password, authenticatingUser.password);
      console.log(`Result is ${result}`);
      if (result) {
        return true;
      }
      return false;
    }
    return false;
  }

  static saveUser(user) {
    userData.push(user);
  }

  static getUsers() {
    return userData;
  }
}

module.exports = User;
