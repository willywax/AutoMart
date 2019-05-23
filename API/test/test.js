const assert = require('assert');

describe('Array', () => {
  describe('#indexOf', () => {
    it('should return -1 if the item is not in array', () => {
      assert.equal([1, 2, 3, 4].indexOf(5), -1);
    });
  });
});
