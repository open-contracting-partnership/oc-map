'use strict';
import React from 'react';

const Filter = React.createClass({
  displayName: 'Filter',

  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps: function () {
    return {
      element: 'div',
      className: '',
    };
  },

  render: function () {
    var klasses = ['drop'];

    if (this.props.className) {
      klasses.push(this.props.className);
    }

    return (
      <this.props.element className={klasses.join(' ')} data-hook='dropdown' ref='dropdown'>
        {this.props.children}
      </this.props.element>
    );
  }
});

module.exports = Filter;
