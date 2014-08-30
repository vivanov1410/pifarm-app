'use strict';

angular.module('pifarm.app')
.controller('SignupCtrl',
function ($scope, $location, $http, $window, Auth) {

  $window.document.title = 'Sign Up | Pifarm';

  $scope.account = {
    fullName: 'Peter Griffin',
    email: 'peter@gmail.com',
    password: 'testishe'
  };
  $scope.loading = false;
  $scope.error = false;

  $scope.startLoading = function () {
    $scope.loading = true;
    $scope.signupButtonText = 'Creating Account...';
  };

  $scope.stopLoading = function () {
    $scope.loading = false;
    $scope.signupButtonText = 'Sign Up';
  };

  $scope.resetErrors = function () {
    $scope.error = false;
  }

  $scope.signup = function(account, form) {
    $scope.resetErrors();
    
    // TODO: add error handling
    if(form.$valid) {
      $scope.startLoading();

      Auth.signup(account)
        .then(function (response) {
          $scope.stopLoading();
          // TODO: add notification
          $location.path('/dashboard');
        })
        .catch(function (err) {
          $scope.stopLoading();
        });
    }
  }

});