'use strict';

angular.module('pifarm.app')
.controller('SignupCtrl',
['$scope', 'Settings',
function ($scope, Settings) {
  
  $scope.currentYear = Settings.currentYear;

}]);
