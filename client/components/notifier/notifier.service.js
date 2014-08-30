'use strict';

angular.module('pifarm.app')
.factory('Notifier', function ($rootScope) {

  return {

    serverError: function () {
      $rootScope.$broadcast("showServerError");
    }

  };

});