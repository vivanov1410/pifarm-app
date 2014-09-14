'use strict';

angular.module('pifarm.app')
.factory('Pinaples', function (Restangular) {

  var route = 'pinaples';

  return {

    all: function () {
      return Restangular.all(route).getList();
    },

    find: function (id) {
      return Restangular.one(route, id).get();
    },

    create: function (pinaple) {
      return Restangular.all(route).post(pinaple);
    },

    update: function (pinaple) {
      return pinaple.put();
    },

    remove: function (pinaple) {
      return Restangular.one(route, pinaple.id).remove();
    }

  };

});