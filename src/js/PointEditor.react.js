import React from 'react';
import { PropTypes } from 'react';

var PointEditor = React.createClass({
  propTypes: {
    handleAdd: PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      x: '',
      y: ''
    };
  },

  _onXChange: function(event) {
    this.setState({ x : event.target.value });
  },

  _onYChange: function(event) {
    this.setState({ y : event.target.value });
  },

  _onAdd: function() {
    this.props.handleAdd({
      x : this.state.x,
      y : this.state.y
    });
    this.setState({ x : '', y : ''});
  },

  render: function() {
    return (
      <div>
        <input
          className="pointInput"
          onChange={this._onXChange}
          value={this.state.x}
        />
        <input
          className="pointInput"
          onChange={this._onYChange}
          value={this.state.y}
        />
        <a className="add" onClick={this._onAdd} />
      </div>
    );
  }
});

module.exports = PointEditor;
