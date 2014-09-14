angular.module('pifarm.app')
.controller('PinapleCreateCtrl', function ($scope, $window, $location, Pinaples) {
  
  $window.document.title = 'Create Pinaple | Pifarm';

  $scope.pinaple = {};
  $scope.loading = false;

  $scope.startLoading = function () {
    $scope.loading = true;
    $scope.createButtonText = 'Creating...';
  };

  $scope.stopLoading = function () {
    $scope.loading = false;
    $scope.createButtonText = 'Create Pinaple';
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