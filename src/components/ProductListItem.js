'use strict';

var React = require('react/addons');


require('styles/ProductListItem.less');

var ProductListItem = React.createClass({

  render: function () {
    return (
        <div className="ProductListItem">
          <p>Content for ProductListItem</p>
        </div>
      );
  }
});

module.exports = ProductListItem; 

