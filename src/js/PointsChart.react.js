var React = require('react');
var ReactPropTypes = React.PropTypes;
var rd3 = require('react-d3');
var ScatterChart = rd3.ScatterChart;

var PointsChart = React.createClass({
  propTypes: {
    points: ReactPropTypes.object.isRequired
  },

  render: function() {
    var ps    = [];
    var chart = null;

    if (Object.keys(this.props.points).length) {
      for (var point in this.props.points) {
        ps.push(this.props.points[point].point);
      }
      var data = { name: "series1", values: ps };
      chart = 
        <ScatterChart
          data={data}
          width={500}
          height={300}
          title="Demo Chart"
        />;
    }

    return (
      <div className="pointsChart">
        {chart}
      </div>
    );
  }
});

module.exports = PointsChart;
