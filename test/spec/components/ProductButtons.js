'use strict';

describe('ProductButtons', function () {
  var React = require('react/addons');
  var ProductButtons, component;

  beforeEach(function () {
    ProductButtons = require('components/ProductButtons.js');
    component = React.createElement(ProductButtons);
  });

  it('should create a new instance of ProductButtons', function () {
    expect(component).toBeDefined();
  });
});
