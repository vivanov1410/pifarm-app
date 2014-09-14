
'use strict';

angular.module('pifarm.app')
.controller('PinapleCtrl', function ($scope, $window, pinaple) {
  
  $window.document.title = 'Edit Pinaple | Pifarm';

  $scope.pinaple = pinaple;

  $scope.menu = [
    {
      title: 'Overview',
      description: 'Summary of data and logs',
      link: 'pinaples/' + $scope.pinaple.id + '/overview'
    },
    {
      title: 'Streams',
      description: 'Data channels',
      link: 'pinaples/' + $scope.pinaple.id + '/streams'
    }
  ];

});