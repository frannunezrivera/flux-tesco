'use strict';

describe('ProductSection', function () {
  var React = require('react/addons');
  var ProductSection, component;

  beforeEach(function () {
    ProductSection = require('components/ProductSection.js');
    component = React.createElement(ProductSection);
  });

  it('should create a new instance of ProductSection', function () {
    expect(component).toBeDefined();
  });
});
