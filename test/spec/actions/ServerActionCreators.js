'use strict';

describe('ServerActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/ServerActionCreators.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
