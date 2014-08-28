'use strict';

angular.module('pifarm.app')
.config(function ($stateProvider) {
  
  $stateProvider
    .state('registration', {
      abstract: true,
      templateUrl: 'app/registration/registration.html',
      controller: 'RegistrationCtrl'
    })
    .state('registration.signin', {
      url: '/signin?username',
      templateUrl: 'app/registration/signin/signin.html',
      controller: 'SigninCtrl'
    })
    .state('registration.signup', {
      url: '/signup',
      templateUrl: 'app/registration/signup/signup.html',
      controller: 'SignupCtrl'
    })
    .state('registration.forgot', {
      url: '/forgot?from',
      templateUrl: 'app/registration/forgot/forgot.html',
      controller: 'ForgotCtrl'
    });

});