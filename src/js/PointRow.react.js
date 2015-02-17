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
