'use strict';

var React = require('react/addons');


require('styles/ProductSection.less');

var ProductSection = React.createClass({

  render: function () {
    return (
        <div className="ProductSection">
          <p>Content for ProductSection</p>
        </div>
      );
  }
});

module.exports = ProductSection; 

