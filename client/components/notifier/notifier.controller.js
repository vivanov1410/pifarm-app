'use strict';

angular.module('pifarm.app')
.controller('NotifierCtrl', function ($scope, $timeout) {

  $scope.serverError = false;

  $scope.$on('showServerError', function () {
    $scope.serverError = true;
    $timeout(function () {
      $scope.serverError = false;
    }, 10000);
  });

});
