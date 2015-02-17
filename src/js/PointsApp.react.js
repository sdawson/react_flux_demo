var PointStore = require('./PointStore');
var PointsChart = require('./PointsChart.react');
var PointsTable = require('./PointsTable.react');
var React = require('react');

var PointsApp = React.createClass({
  getInitialState: function() {
    return {
      points : {},
    }
  },

  componentWillMount: function() {
    PointStore.addListener(this._onStoreChange);
  },

  componentWillUnmount: function() {
    PointStore.removeListener(this._onStoreChange);
  },

  _onStoreChange: function() {
    this.setState({ points : PointStore.getAll() });
  },

  render: function() {
    return (
      <div className="pointsApp">
        <PointsTable points={this.state.points} />
        <PointsChart points={this.state.points} />
      </div>
    );
  }
});

module.exports = PointsApp;
