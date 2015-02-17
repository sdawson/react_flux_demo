var PointConstants = require('./PointConstants');
var PointDispatcher = require('./PointDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var mapObject = require('react/lib/mapObject');

var _points = {};

function addPoint(point) {
  // Would replace this with actual id creation
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _points[id] = {
    id : id,
    x : point.x,
    y : point.y
  };
}

function addPoints(points) {
  for (var i=0; i<points.length; i++) {
    addPoint(points[i]);
  }
}

function deletePoint(id) {
  delete _points[id];
}

function deleteAllPoints() {
  _points = {};
}

var PointStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    var points = [];
    mapObject(_points, function(point) {
      points.push({ x : point.x, y : point.y });
    });
    return _points;
  },

  emitChange: function() {
    this.emit('change');
  },

  addListener: function(callback) {
    this.on('change', callback);
  },

  removeListener: function(callback) {
    this.removeListener('change', callback);
  },
});

PointDispatcher.register(function(payload) {
  var point;

  switch(payload.action) {
    case PointConstants.POINT_ADD:
      addPoint(payload.point);
      PointStore.emitChange();
      break;
    case PointConstants.POINT_ADD_DEMO:
      addPoints(payload.points);
      PointStore.emitChange();
      break;
    case PointConstants.POINT_DELETE:
      deletePoint(payload.id);
      PointStore.emitChange();
      break;
    case PointConstants.POINT_DELETE_ALL:
      deleteAllPoints();
      PointStore.emitChange();
      break;
    default:
      // do nothing
  }
});

module.exports = PointStore;
