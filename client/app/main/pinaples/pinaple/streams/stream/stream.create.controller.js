'use strict';

angular.module('pifarm.app')
.controller('StreamCreateCtrl', function ($scope, $window, pinaple) {
  
  $window.document.title = 'Create Stream | Pifarm';

  $scope.pinaple = pinaple;

});