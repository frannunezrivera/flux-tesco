'use strict';

describe('BasketListItems', function () {
  var React = require('react/addons');
  var BasketListItems, component;

  beforeEach(function () {
    BasketListItems = require('components/BasketListItems.js');
    component = React.createElement(BasketListItems);
  });

  it('should create a new instance of BasketListItems', function () {
    expect(component).toBeDefined();
  });
});
