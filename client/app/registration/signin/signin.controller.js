'use strict';

angular.module('pifarm.app')
.controller('SigninCtrl', function ($scope, $log, $location, $window, $stateParams, Auth, Inspector, Notifier) {

  $window.document.title = 'Sign In | Pifarm';

  $scope.credentials = {
    username: $stateParams.username || ''
  };
  $scope.loading = false;
  $scope.error = false;

  $scope.startLoading = function () {
    $scope.loading = true;
    $scope.signinButtonText = 'Signing In...';
  };

  $scope.stopLoading = function () {
    $scope.loading = false;
    $scope.signinButtonText = 'Sign In';
  };

  $scope.resetErrors = function () {
    $scope.error = false;
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

  $scope.signin = function (credentials, form) {
    $scope.resetErrors();

    if(form.$valid) {
      if(credentials.password.length < 8) {
        return $scope.error = true;
      }
      $scope.startLoading();
      Auth.login(credentials)
        .then(function (account) {
          $scope.stopLoading();
          $location.url('/dashboard');  
        })
        .catch(function (err) {
          $scope.stopLoading();
          $scope.handleError(err);
        });
    }
  };

});
