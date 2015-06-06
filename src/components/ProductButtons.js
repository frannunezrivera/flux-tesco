'use strict';

var React = require('react/addons');
var ReactPropTypes = React.PropTypes;
var ServerActionCreators = require('../actions/ServerActionCreators');

require('styles/ProductButtons.less');

var ProductButtons = React.createClass({
	propTypes: {
        item: ReactPropTypes.object
    },

	render: function () {
		var item = this.props;

		return (
		    <div className="ProductButtons">
		      <span><button className="addItem" onClick={this._onAddClick}>+</button></span><span className="qty">{item.qty}</span><span><button className="removeItem" onClick={this._onRemoveClick}>-</button></span>
		    </div>
		);
	},

	_onAddClick: function(event){
		var item = this.props;
		ServerActionCreators.addToBasket(item.id);
	},

	_onRemoveClick: function(event){
		var item = this.props;
		ServerActionCreators.removeFromBasket(item.id);
	}
});

module.exports = ProductButtons; 

