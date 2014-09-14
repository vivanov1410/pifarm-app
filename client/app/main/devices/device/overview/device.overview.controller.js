angular.module('pifarm.app')
.controller('DeviceOverviewCtrl', function ($scope, $window, $location, Devices, device) {
  
  $window.document.title = 'Device Overview | Pifarm';

  $scope.device = device;
  $scope.loading = false;

  $scope.startLoading = function () {
    $scope.loading = true;
    $scope.updateButtonText = 'Updating...';
  };

  $scope.stopLoading = function () {
    $scope.loading = false;
    $scope.updateButtonText = 'Update Pinaple';
  };

  $scope.handleError = function (err) {
    $scope.credentials.password = '';
    if(Inspector.unauthorized(err)) {
      $scope.error = true;
    }
    else {
      $log.error(err);
      Notifier.serverError();
    }
  };

  $scope.create = function (pinaple, form) {
    if(form.$valid) {
      $scope.startLoading();

      Devices.create(pinaple)
        .then(function (pinaple) {
          $scope.stopLoading();
          $location.url('pinaples/' + pinaple.id);
        })
        .catch(function (err) {
          $scope.stopLoading();
          $scope.handleError(err);
        });
    }
  };

});