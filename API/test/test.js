const assert = require('assert');

const User = require('../models/users');

describe('Model Tests', () => {
  describe('User Model', () => {
    const person = new User(
      'William',
      'William',
      '123123',
      'w@stations.com',
      '144 Peter Road',
      false,
    );

    it('should return correct First Name', () => {
      assert.equal(person.first_name, 'William');
    });

    it('should return correct Last Name', () => {
      assert.equal(person.last_name, 'William');
    });

    it('should return correct Address', () => {
      assert.equal(person.address, '144 Peter Road');
    });

    it('should return true if correct user name and password', () => {
      const person2 = {
        email: 'w@stations.com',
        password: '123123',
      };
      assert.equal(User.logInUser(person, person2), true);
    });

    it('should return false if wrong password', () => {
      const person3 = {
        email: 'w@stations.com',
        password: '12312',
      };
      assert.equal(User.logInUser(person, person3), false);
    });

    it('should return false if wrong username is given', () => {
      const person3 = {
        email: 'w@station.com',
        password: '12313',
      };
      assert.equal(User.logInUser(person, person3), false);
    });

    it('should save user successfully', () => {
      User.saveUser(person);

      assert.equal(User.getUsers().length, 1);
    });
  });
});
