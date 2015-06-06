'use strict';

var React = require('react/addons');
var ItemStore = require('../stores/ItemStore');
var ProductListItem = require('./ProductListItem');
var ServerActionCreators = require('../actions/ServerActionCreators');

require('styles/ProductSection.less');

function getStateFromStores() {
	return {
		items: ItemStore.getAll(),
	};
}

function getProductListItems(item) {
	function getPromotions(promotions){
		if(!promotions.length){
			return false;
		}

		return promotions.map(function(promotion){
			return promotion.Description;
		});
	}

	var promotions = getPromotions(item.Promotions);

    return (
        <ProductListItem key={item.Id} id={item.Id} name={item.Name} price={item.Price} img={item.Image} basketQty={item.BasketQty} promotions={promotions}/>
    );
}

var ProductSection = React.createClass({
	getInitialState: function() {
    	return getStateFromStores();
  	},

  	componentDidMount: function() {
    	ItemStore.addChangeListener(this._onChange);
  	},
  	
  	_onChange: function() {
    	this.setState(getStateFromStores());
  	},

  	_onSelectChange: function(event){
  		ServerActionCreators[event.target.value]();
  	},

  	render: function () {
  		if (!this.state.items.length){
            return (
                <div className="ProductSection">
		          	<span>Loading products...</span>
	        	</div>
            );
        }

        var productListItems = this.state.items.map(getProductListItems);

    	return (
	        <div className="ProductSection">
	        	<h3>Products List</h3>
	        	<label>Order by: </label><select onChange={this._onSelectChange}>
	        		<option value="orderByName">Product Name</option>
	        		<option value="orderByPrice">Product Price</option>
	        	</select>
	          	<ul className="product-list" ref="productList">
	          		{productListItems}
	        	</ul>
	        </div>
      	);
  	}
});

module.exports = ProductSection; 

