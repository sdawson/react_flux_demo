import React from 'react';
import { PropTypes } from 'react';
import rd3 from 'react-d3';
import { ScatterChart } from 'react-d3';

var PointsChart = React.createClass({
  propTypes: {
    points: PropTypes.object.isRequired
  },

  render: function() {
    var ps    = [];
    var chart = null;

    if (Object.keys(this.props.points).length) {
      for (var p in this.props.points) {
        var point = {
          x : this.props.points[p].x,
          y : this.props.points[p].y
        };
        ps.push(point);
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
