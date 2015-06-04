'use strict';

describe('ProductListItem', function () {
  var React = require('react/addons');
  var ProductListItem, component;

  beforeEach(function () {
    ProductListItem = require('components/ProductListItem.js');
    component = React.createElement(ProductListItem);
  });

  it('should create a new instance of ProductListItem', function () {
    expect(component).toBeDefined();
  });
});
