'use strict';

angular.module('pifarm.app')
.config(function ($stateProvider) {
  
  $stateProvider
    .state('main.pinaples', {
      url: '/pinaples',
      templateUrl: 'app/main/pinaples/pinaples.html',
      controller: 'PinaplesCtrl',
      authenticate: true
    })
    .state('main.pinaple-create', {
      url: '/pinaples/create',
      templateUrl: 'app/main/pinaples/pinaple/create/pinaple.create.html',
      controller: 'PinapleCreateCtrl',
      authenticate: true
    })
    .state('main.pinaple', {
      url: '/pinaples/:pinapleId',
      templateUrl: 'app/main/pinaples/pinaple/pinaple.html',
      controller: 'PinapleCtrl',
      resolve: {
        pinaple: ['$stateParams', '$q', 'Pinaples', function ($stateParams, $q, Pinaples) {
          var deferred = $q.defer();
          var pinapleId = $stateParams.pinapleId;
          Pinaples.find(pinapleId)
            .then(function (pinaple) {
              deferred.resolve(pinaple);
            })
            .catch(function (err) {
              deferred.reject(err);
            });

          return deferred.promise;
        }]
      },
      authenticate: true
    })
    .state('main.pinaple.overview', {
      url: '/overview',
      templateUrl: 'app/main/pinaples/pinaple/overview/pinaple.overview.html',
      controller: 'PinapleOverviewCtrl',
      authenticate: true
    })
    .state('main.pinaple.streams', {
      url: '/streams',
      templateUrl: 'app/main/pinaples/pinaple/streams/pinaple.streams.html',
      controller: 'PinapleStreamsCtrl',
      authenticate: true
    });
        
});