const assert = require('assert');

const index = require('../index');
const app = require('../app');

describe('Array', (done) => {
  describe('#indexOf', () => {
    it('should return -1 if the item is not in array', (done) => {
      assert.equal([1, 2, 3, 4].indexOf(5), -1);
      done();
    });
    // done();
  });
});
