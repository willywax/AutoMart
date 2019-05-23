const bcrypt = require('bcrypt');
const uuid = require('uuid');

// const static userData = [];
const userData = [];

class User {
  constructor(firstName, lastName, password, email, address, isAdmin) {
    this.id = this.generateId();
    this.first_name = firstName;
    this.last_name = lastName;
    this.password = this.encrypt(password);
    this.email = email;
    this.address = address;
    this.is_admin = isAdmin;
  }

  // get _id(){
  //   return this.id;
  // }

  // set _id(value){
  //   this.id = value;
  // }

  // get _first_name() {
  //   return this.first_name;
  // }

  // set _first_name(value) {
  //   this.first_name = value;
  // }

  // get _last_name() {
  //   return this.last_name;
  // }

  // set _last_name(value) {
  //   this.last_name = value;
  // }

  // get _password() {
  //   return this.password;
  // }

  // set _password(value) {
  //   this.password = this.encrypt(value);
  // }

  // get _email() {
  //   return this.email;
  // }

  // set _email(value) {
  //   this.email = value;
  // }

  // get _address() {
  //   return this.address;
  // }

  // set _address(value) {
  //   this.address = value;
  // }

  encrypt(value) {
    const hash = bcrypt.hashSync(value, 10);
    return hash;
  }

  generateId() {
    return uuid.v1();
  }

  static decrypt(hash, value) {
    if (bcrypt.compareSync(value, hash)) {
      return true;
    }
    return false;
  }

  static logInUser(authenticatingUser) {
    const user = this.findUser(authenticatingUser);

    let response = {
      authenticated: false,
      data: null,
    };
    if (user !== null) {
      const result = this.decrypt(user.password, authenticatingUser.password);

      if (result) {
        response = {
          authenticated: true,
          data: user,
        };
      }
    } else {
      response = {
        authenticated: false,
        data: 'Incorect Username or Password',
      };
    }
    return response;
  }

  static saveUser(user) {
    userData.push(user);

    // Return last saved Record
    return userData[userData.length - 1];
  }

  static getUsers() {
    return userData;
  }

  static findUser(user) {
    const found = false;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === user.email) {
        return userData[i];
      }
    }
    return null;
  }
}

module.exports = User;
