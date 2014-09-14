'use strict';

angular.module('pifarm.app')
.controller('PinapleStreamsCtrl', function ($scope, $window, pinaple) {
  
  $window.document.title = 'Streams | Pifarm';

  $scope.pinaple = pinaple;

});