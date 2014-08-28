'use strict';

angular.module('pifarm.app')
.controller('SigninCtrl', function ($scope, $location, $window, Auth) {

  $window.document.title = 'Sign In | Pifarm';

  $scope.credentials = {};
  $scope.loading = false;
  $scope.error = false;

  $scope.resetErrors = function () {
    $scope.error = false;
  };

  $scope.startLoading = function () {
    $scope.loading = true;
    $scope.loginButtonText = 'Signing In...';
  };

  $scope.stopLoading = function () {
    $scope.loading = false;
    $scope.loginButtonText = 'Login';
  };

  $scope.signin = function (credentials, form) {
    $scope.resetErrors();

    if(form.$valid) {
      $scope.startLoading();
      // TODO: add minimum password validation

      Auth.login(credentials)
        .then(function () {
          // Logged in, redirect to dashboard
          $scope.stopLoading();
          $location.path('/dashboard');  
        })
        .catch(function (err) {
          $scope.stopLoading();
          // TODO: add error handling
        });
    }
  };

});
