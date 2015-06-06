'use strict';

var React = require('react/addons');
var ReactPropTypes = React.PropTypes;
var ProductButtons = require('./ProductButtons');


require('styles/ProductListItem.less');

var ProductListItem = React.createClass({
	propTypes: {
        item: ReactPropTypes.object
    },

	render: function () {
		var item = this.props;
		var price = '£' + item.price.toFixed(2);
		return (
		    <li className="ProductListItem">
		      	<div className="row productDesc">
					<p><img src={item.img} /></p>
					<p>{item.name}</p>
					<ul className="promotions">
					{(item.promotions || []).map(function(value) {
					    return <li key={value}>{value}</li>;
					})}
					</ul>
            	</div>
            	<div className="row productActions">
	            	<p>{price}</p>
	            	<ProductButtons key={item.key} id={item.id} qty={item.basketQty} />
            	</div>
		    </li>
		 );
	}
});

module.exports = ProductListItem; 

