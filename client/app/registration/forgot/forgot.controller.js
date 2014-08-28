'use strict';

angular.module('pifarm.app')
.controller('ForgotCtrl',
function ($scope, $location, $http, $stateParams, $window) {

  $window.document.title = 'Restore Password | Pifarm';

  $scope.from = $stateParams.from;

  $scope.remember = function(email, form) {
    if(form.$valid) {
      $http.post('/remember', { email: email })
      .success(function(response) {
        //Notifier.success( 'Email with reset instructions is sent to ' + email );
      });

      $location.url('from');
    }
  };

});
