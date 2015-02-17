var PointActions = require('./PointActions');
var React = require('react');
var ReactPropTypes = React.PropTypes;

var PointRow = React.createClass({
  propTypes: {
    point: ReactPropTypes.object.isRequired
  },

  _onDelete: function(event) {
    PointActions.deletePoint(this.props.point.id);
  },

  render: function() {
    return (
      <div>
        <div className="point">
          x: {this.props.point.point.x}
        </div>
        <div className="point">
          y: {this.props.point.point.y}
        </div>
        <a className="delete" onClick={this._onDelete} />
      </div>
    );
  }
});

module.exports = PointRow;
