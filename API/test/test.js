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

    it('should return true if correct user name and password', () => {
      const person2 = {
        email: 'w@stations.com',
        password: '123123',
      };
      assert(User.logInUser(person, person2), true);
    });
    // done();
  });
});
