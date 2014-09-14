'use strict';

angular.module('pifarm.app')
.controller('DevicesCtrl', function ($scope, $log, Devices) {

  Devices.all()
    .then(function (devices) {
      $scope.devices = devices;
    })
    .catch(function (err) {
      $log.error(err);
    });

});