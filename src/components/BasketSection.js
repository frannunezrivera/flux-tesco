'use strict';

var React = require('react/addons');
var ItemStore = require('../stores/ItemStore');
var BasketListItem = require('./BasketListItem');

require('styles/BasketSection.less');

function getStateFromStores() {
	return {
		items: ItemStore.getInBasket(),
	};
}


function getBasketListItems(item) {
    return (
        <BasketListItem key={item.Id} id={item.Id} name={item.Name} price={item.Price} img={item.Image} basketQty={item.BasketQty}/>
    );
}

var BasketSection = React.createClass({

  	getInitialState: function() {
    	return getStateFromStores();
  	},

  	componentDidMount: function() {
    	ItemStore.addChangeListener(this._onChange);
  	},
  	
  	_onChange: function() {
    	this.setState(getStateFromStores());
  	},

  	render: function () {
  		if (!this.state.items.length){
            return (
                <div className="BasketSection">
                	<h3>Basket</h3>
		          	<span>Basket is empty! :( </span>
	        	</div>
            );
        }

        var basketListItems = this.state.items.map(getBasketListItems);

    	return (
	        <div className="BasketSection">
	        	<h3>Basket</h3>
	          	<ul className="basket-list" ref="basketList">
	          		{basketListItems}
	        	</ul>
	        </div>
      	);
  	}
});

module.exports = BasketSection; 

