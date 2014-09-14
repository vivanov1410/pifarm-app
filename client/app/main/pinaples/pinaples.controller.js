
'use strict';

angular.module('pifarm.app')
.controller('PinaplesCtrl', function ($scope, $log, $window, Pinaples) {
  
  $window.document.title = 'Pinaples | Pifarm';

  Pinaples.all()
    .then(function (pinaples) {
      $scope.pinaples = pinaples;
    })
    .catch(function (err) {
      $log.error(err);
    });

});