'use strict';

describe('FluxTescoApp', function () {
  var React = require('react/addons');
  var FluxTescoApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FluxTescoApp = require('components/FluxTescoApp.js');
    component = React.createElement(FluxTescoApp);
  });

  it('should create a new instance of FluxTescoApp', function () {
    expect(component).toBeDefined();
  });
});
