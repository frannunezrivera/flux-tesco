'use strict';

var AppDispatcher = require('../dispatcher/FluxTescoAppDispatcher');

var ServerActionCreators = {
	receiveAll: function(items){
		AppDispatcher.dispatch({
			type: 'RECEIVE_ITEMS',
			items: items
		});
	},

	addToBasket: function(id){
		AppDispatcher.dispatch({
			type: 'ADD_ITEM',
			id: id
		});
	},

	removeFromBasket: function(id){
		AppDispatcher.dispatch({
			type: 'REMOVE_ITEM',
			id: id
		});
	},

	removeAllFromBasket: function(id){
		AppDispatcher.dispatch({
			type: 'REMOVE_ITEM_ALL',
			id: id
		});
	},

	orderByPrice: function(){
		AppDispatcher.dispatch({
			type: 'ORDER_PRICE'
		});
	},

	orderByName: function(){
		AppDispatcher.dispatch({
			type: 'ORDER_NAME'
		});
	},

	orderByRelevance: function(){
		AppDispatcher.dispatch({
			type: 'ORDER_RELEVANCE'
		});
	}
};

module.exports = ServerActionCreators; 
