angular.module('pifarm.app')
.controller('PinapleOverviewCtrl', function ($scope, $window, $location, Pinaples, pinaple) {
  
  $window.document.title = 'Overview Pinaple | Pifarm';

  $scope.pinaple = pinaple;
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

      Pinaples.create(pinaple)
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