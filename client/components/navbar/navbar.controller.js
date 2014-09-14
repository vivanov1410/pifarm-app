'use strict';

angular.module('pifarm.app')
.controller('NavbarCtrl', function ($scope, $location, Auth) {

  $scope.getCurrentAccount = Auth.getCurrentAccount;

  $scope.menu = [
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: 'fa fa-dashboard'
    },
    {
      title: 'Pinaples',
      link: '/pinaples',
      icon: 'fa fa-rocket'
    },
    {
      title: 'Devices',
      link: '/devices',
      icon: 'fa fa-tasks'
    }
  ];

  $scope.logout = function () {
    Auth.logout();
    $location.path('/login');
  };


});