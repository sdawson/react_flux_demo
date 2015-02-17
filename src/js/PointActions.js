var PointConstants = require('./PointConstants');
var PointDispatcher = require('./PointDispatcher');

/*
 * Mean max temperature (C) for Viewbank, Victoria, AU
 * for the year 2014
 */
var demoPoints = [
  { x : 1,  y : 29.7 },
  { x : 2,  y : 29.7 },
  { x : 3,  y : 26.2 },
  { x : 4,  y : 20.9 },
  { x : 5,  y : 18.7 },
  { x : 6,  y : 15.0 },
  { x : 7,  y : 13.9 },
  { x : 8,  y : 15.3 },
  { x : 9,  y : 18.5 },
  { x : 10, y : 22.2 },
  { x : 11, y : 24.6 },
  { x : 12, y : 25.4 }
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
