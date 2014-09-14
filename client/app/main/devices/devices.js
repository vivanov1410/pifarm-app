'use strict';

angular.module('pifarm.app')
.config(function ($stateProvider) {
  
  $stateProvider
    .state('main.devices', {
      url: '/devices',
      templateUrl: 'app/main/devices/devices.html',
      controller: 'DevicesCtrl',
      authenticate: true
    })
    .state('main.device-create', {
      url: '/devices/create',
      templateUrl: 'app/main/devices/device/create/device.create.html',
      controller: 'CreateDeviceCtrl',
      authenticate: true
    })
    .state('main.device', {
      url: '/devices/:deviceId',
      templateUrl: 'app/main/devices/device/device.html',
      controller: 'DeviceCtrl',
      resolve: {
        device: ['$stateParams', '$q', 'Devices', function ($stateParams, $q, Devices) {
          var deferred = $q.defer();
          var deviceId = $stateParams.deviceId;
          Devices.find(deviceId)
            .then(function (device) {
              deferred.resolve(device);
            })
            .catch(function (err) {
              deferred.reject(err);
            });

          return deferred.promise;
        }]
      },
      authenticate: true
    })
    .state('main.device.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/main/devices/device/dashboard/device.dashboard.html',
      controller: 'DeviceDashboardCtrl',
      authenticate: true
    })
    .state('main.device.overview', {
      url: '/overview',
      templateUrl: 'app/main/devices/device/overview/device.overview.html',
      controller: 'DeviceOverviewCtrl',
      authenticate: true
    });
    
});