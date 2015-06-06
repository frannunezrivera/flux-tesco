'use strict';

describe('BasketSection', function () {
  var React = require('react/addons');
  var BasketSection, component;

  beforeEach(function () {
    BasketSection = require('components/BasketSection.js');
    component = React.createElement(BasketSection);
  });

  it('should create a new instance of BasketSection', function () {
    expect(component).toBeDefined();
  });
});
