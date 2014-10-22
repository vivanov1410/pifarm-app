'use strict';

angular.module('pifarm.app')
.controller('CreateDeviceCtrl', function ($scope, $log, $window, $location, Devices, DevicesData, Inspector, Notifier) {

  $window.document.title = 'Create Device | Pifarm';

  $scope.types = DevicesData.types;
  $scope.device = {
    type: $scope.types[0].key
  };
  $scope.loading = false;

  $scope.startLoading = function () {
    $scope.loading = true;
    $scope.createButtonText = 'Creating...';
  };

  $scope.stopLoading = function () {
    $scope.loading = false;
    $scope.createButtonText = 'Create Device';
  };

  $scope.resetErrors = function () {
    $scope.error = false;
  };

  $scope.handleError = function (err) {
    if(Inspector.unauthorized(err)) {
      $scope.error = true;
    }
    else {
      $log.error(err);
      Notifier.serverError();
    }
  }

  $scope.create = function(device, form) {
    if(form.$valid) {
      $scope.startLoading();

      Devices.create(device)
        .then(function (device) {
          $scope.stopLoading();
          $location.url('devices/' + device.id + '/dashboard');
        })
        .catch(function (error) {
          $scope.stopLoading();
          $scope.handleError(error);
        });
    }
  };

});