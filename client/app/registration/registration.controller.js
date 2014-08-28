'use strict';

angular.module('pifarm.app')
.controller('RegistrationCtrl',
function ($scope, Settings) {
  
  $scope.currentYear = Settings.currentYear;

});