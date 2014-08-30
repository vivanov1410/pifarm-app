'use strict';

angular.module('pifarm.app')
.config(function ($stateProvider) {
  
  $stateProvider
    .state('main', {
      abstract: true,
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl',
      authenticate: true
    })
    .state('main.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/main/dashboard/dashboard.html',
      controller: 'DashboardCtrl',
      authenticate: true
    });
    
});