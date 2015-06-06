'use strict';

var React = require('react/addons');
var ProductSection = require('./ProductSection');
var BasketSection = require('./BasketSection');
var ItemStore = require('../stores/ItemStore');
var ServerAPIUtils = require('../utils/ServerAPIUtils');

// CSS
require('normalize.css');
require('../styles/main.css');

ServerAPIUtils.getItems();

var FluxTescoApp = React.createClass({

	render: function() {
		return (
		  <div className='main'>
		      <ProductSection />
		      <BasketSection />
		  </div>
		);
	}
});

module.exports = FluxTescoApp;
