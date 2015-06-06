'use strict';

var React = require('react/addons');
var ProductButtons = require('./ProductButtons');
var ReactPropTypes = React.PropTypes;
var ServerActionCreators = require('../actions/ServerActionCreators');

require('styles/BasketListItem.less');

var BasketListItem = React.createClass({
	propTypes: {
        item: ReactPropTypes.object
    },

    _onRemoveAllClick: function(){
    	var item = this.props;
		ServerActionCreators.removeAllFromBasket(item.id);
    },

	render: function () {
		var item = this.props;
		var price = '£' + (item.price * item.basketQty).toFixed(2);
		return (
		    <li className="BasketListItem">
		      	<div className="row">
		      		<span className="image"><img src={item.img} /></span><span className="desc">{item.name}</span>
		      		<span className="removeAll"><button onClick={this._onRemoveAllClick}> x </button></span>
		    	</div>
            	<div className="row">	
            		<span className="basketButtons"><ProductButtons key={item.key} id={item.id} qty={item.basketQty} /></span>
            		<span className="price">{price}</span>
            	</div>
		    </li>
		);
	}
});

module.exports = BasketListItem; 

