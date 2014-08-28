'use strict';

angular.module('pifarm.app')
.controller('MainCtrl', function ($scope, Settings) {
  
  $scope.currentYear = Settings.currentYear;

});