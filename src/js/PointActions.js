var PointConstants = require('./PointConstants');
var PointDispatcher = require('./PointDispatcher');

var demoPoints = [
  { x : 0, y : 7 },
  { x : 1, y : 2 },
  { x : 2, y : 3 },
  { x : 4, y : 2 }
];

var PointActions = {
  addPoint: function(point) {
    PointDispatcher.dispatch({
      action : PointConstants.POINT_ADD,
      point : point 
    });
  },
  addDemoPoints: function() {
    PointDispatcher.dispatch({
      action : PointConstants.POINT_ADD_DEMO,
      points : demoPoints
    });
  },
  deletePoint: function(id) {
    PointDispatcher.dispatch({
      action : PointConstants.POINT_DELETE,
      id : id
    });
  },
  deleteAllPoints: function() {
    PointDispatcher.dispatch({
      action : PointConstants.POINT_DELETE_ALL
    });
  }
};

module.exports = PointActions;
