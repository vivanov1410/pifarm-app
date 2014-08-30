'use strict';

angular.module('pifarm.app')
.controller('SignupCtrl',
function ($scope, $log, $location, $http, $window, Auth, Inspector) {

  $window.document.title = 'Sign Up | Pifarm';

  $scope.account = {
    fullName: 'Peter Griffin',
    email: 'peter@test.test',
    password: 'testishe'
  };
  $scope.loading = false;
  $scope.duplicateEmailError = false;
  $scope.serverError = false;

  $scope.startLoading = function () {
    $scope.loading = true;
    $scope.signupButtonText = 'Creating Account...';
  };

  $scope.stopLoading = function () {
    $scope.loading = false;
    $scope.signupButtonText = 'Sign Up';
  };

  $scope.resetErrors = function () {
    $scope.serverError = false;
    $scope.duplicateEmailError = false;
  };

  $scope.handleError = function (err) {
    $scope.stopLoading();
    $scope.account.password = '';
    if(Inspector.clientError(err)) {
      if(Inspector.account.duplicate(err)) {
        $scope.duplicateEmailError = true;
      }
    }
    else {
      $log.error(err);
      $scope.serverError = true;
    }
  }

  $scope.signup = function(account, form) {
    $scope.resetErrors();
    if(form.$valid) {
      $scope.startLoading();

      Auth.signup(account)
        .then(function (response) {
          $scope.stopLoading();
          $location.url('/signin?username=' + response.username);
        })
        .catch(function (err) {
          $scope.handleError(err);
        });
    }
  }

});