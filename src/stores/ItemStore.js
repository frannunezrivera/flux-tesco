'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/FluxTescoAppDispatcher');

var CHANGE_EVENT = 'change';

var _items = {};

var ItemStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    get: function(id) {
        return _items.filter(function(item) {
            return item.Id === id;
        });
    },

    getAll: function() {
        return _items;
    },

    getInBasket: function() {
        if (!_items.length) {
            return _items;
        }

        return _items.filter(function(item) {
            return item.BasketQty > 0;
        });
    },

    addItem: function(id) {
        var item = this.get(id)[0];

        item.BasketQty++;

    },

    removeItem: function(id) {
        var item = this.get(id)[0];

        if (item.BasketQty > 0){
        	item.BasketQty--;	
        }
    },

    removeAllItems: function(id) {
        var item = this.get(id)[0];

        item.BasketQty = 0;

    },

    orderByName: function() {
        _items = _items.sort(function(itemA, itemB) {
            if (itemA.Name < itemB.Name) {
                return -1;
            }
            if (itemA.Name > itemB.Name) {
                return 1;
            }
            return 0;
        });
    },

    orderByPrice: function() {
        _items = _items.sort(function(itemA, itemB) {
            return itemA.Price - itemB.Price;
        });
    }
});

ItemStore.dispatchToken = AppDispatcher.register(function(action) {

    switch (action.type) {
        case "RECEIVE_ITEMS":
            _items = action.items;
            ItemStore.emitChange();
            break;
        case "ADD_ITEM":
            ItemStore.addItem(action.id);
            ItemStore.emitChange();
            break;
        case "REMOVE_ITEM":
            ItemStore.removeItem(action.id);
            ItemStore.emitChange();
            break;
        case "REMOVE_ITEM_ALL":
            ItemStore.removeAllItems(action.id);
            ItemStore.emitChange();
            break;
        case "ORDER_PRICE":
            ItemStore.orderByPrice();
            ItemStore.emitChange();
            break;
        case "ORDER_NAME":
            ItemStore.orderByName();
            ItemStore.emitChange();
            break;
        default:
    }

});

module.exports = ItemStore;