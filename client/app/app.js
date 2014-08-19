'use strict';

angular.module('pifarm.app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
function ($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupCtrl'
    });

  $locationProvider.html5Mode(true);

}]);