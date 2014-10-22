'use strict';

angular.module('pifarm.app')
.factory('Devices', function (Restangular) {

  var route = 'devices';

  return {

    all: function () {
      return Restangular.all(route).getList();
    },

    find: function (id) {
      return Restangular.one(route, id).get();
    },

    create: function (device) {
      return Restangular.all(route).post(device);
    },

    update: function (device) {
      return device.put();
    },

    remove: function (device) {
      return Restangular.one(route, device.id).remove();
    },

    getLatestStats: function (device) {
      return device.one('stats/latest').get();
    },

    getStatsByDate: function (device, start, end) {
      return device.one('stats?start=' + start + '&end=' + end).getList();
    }

  };

});