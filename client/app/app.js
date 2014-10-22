'use strict';

angular.module('pifarm.app', [
  'pifarm.settings',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'growlNotifications',
  'chartjs',
  'angularMoment'
])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise('/dashboard');
  $locationProvider.html5Mode(true);

})
.run(function ($rootScope, $location, $cookieStore, Settings, Auth, Restangular) {

  // Configuring Restangular
  Restangular.setBaseUrl(Settings.apiUrl);

  Restangular.addFullRequestInterceptor(function (headers) {
    var token = $cookieStore.get(Settings.tokenName)
    if(token) {
      headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token
      }
    }
    return { headers: headers };
  });

  Restangular.addResponseInterceptor(function (response, operation) {
    if(operation === 'getList') {
      var modifiedResponse = response.data;

      _.each(modifiedResponse, function (record) {
        if(record.createdAt) record.createdAt = moment(record.createdAt);
        if(record.updatedAt) record.updatedAt = moment(record.updatedAt);
        if(record.at) record.at = moment(record.at);
      });

      modifiedResponse.metadata = {
        offset: response.offset,
        limit: response.limit,
        total: response.total,
      };

      return modifiedResponse;
    }

    return response;
  });

  Restangular.setErrorInterceptor(function (response) {
    if(response.status === 401) {
      Auth.logout();
      $location.path('/signin');
      return false;
    }

    return true;
  });

  // Redirecting to login if route requires auth and user is not logged in
  $rootScope.$on('$stateChangeStart', function (event, next) {
    Auth.isLoggedInAsync(function (loggedIn) {
      if(next.authenticate && !loggedIn) {
        $location.path('/signin');
      }
    });
  });

  Auth.setCurrentAccount();

});