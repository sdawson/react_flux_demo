var PointActions = require('./PointActions');
var PointEditor = require('./PointEditor.react');
var PointRow = require('./PointRow.react');
var React = require('react');
var ReactPropTypes = React.PropTypes;

var PointsTable = React.createClass({
  propTypes: {
    points: ReactPropTypes.object.isRequired
  },

  _addPoint: function(point) {
    PointActions.addPoint(point);
  },

  _addDemoPoints: function(event) {
    PointActions.addDemoPoints();
  },

  _delAllPoints: function(event) {
    PointActions.deleteAllPoints();
  },

  render: function() {
    var rows = [];

    for (var id in this.props.points) {
      rows.push(<PointRow key={id} point={this.props.points[id]} />);
    }

    return (
      <div className="pointsTable">
        {rows}
        <div className="pointAdder">
          <PointEditor handleAdd={this._addPoint} />
        </div>
        <div className="pointControls">
          <a className="addDemoData" onClick={this._addDemoPoints}>
            Add demo points
          </a>
          <a className="deleteAll" onClick={this._delAllPoints}>
            Delete all points
          </a>
        </div>
      </div>
    );
  }
});

module.exports = PointsTable;
