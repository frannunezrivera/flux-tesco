'use strict';

describe('ItemStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/ItemStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
