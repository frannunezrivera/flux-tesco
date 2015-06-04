'use strict';

var FluxTescoApp = require('./FluxTescoApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={FluxTescoApp}>
    <Route name="/" handler={FluxTescoApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
