var expect = require('expect.js');
var friendlyTime = require('../index').friendlyTime;

describe('friendly-time', function() {

  it('normal usage', function() {
    expect(friendlyTime(new Date())).to.be('刚刚');
  });

});
