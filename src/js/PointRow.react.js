import PointActions from './PointActions';
import React from 'react';
import { PropTypes } from 'react';

var PointRow = React.createClass({
  propTypes: {
    point: PropTypes.object.isRequired
  },

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   return this.props.point.x !== nextProps.point.x ||
  //          this.props.point.y !== nextProps.point.y;
  // },

  // componentWillUpdate: function(nextProps, nextState) {
  //   console.log('componentWillUpdate:');
  // },

  _onDelete: function(event) {
    PointActions.deletePoint(this.props.point.id);
  },

  render: function() {
    var key = this.props.point.x + ":" + this.props.point.y;
    return (
      <div key={key}>
        <div className="point">
          x: {this.props.point.x}
        </div>
        <div className="point">
          y: {this.props.point.y}
        </div>
        <a className="delete" onClick={this._onDelete} />
      </div>
    );
  }
});

module.exports = PointRow;
