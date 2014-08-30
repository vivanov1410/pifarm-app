'use strict';

angular.module('pifarm.app')
.factory('Auth',
function ($q, $http, $cookieStore, Restangular, Settings, Accounts) {

  var currentAccount = {};
  var tokenName = Settings.tokenName;

  return {

    /**
     * Authenticates user and saves access token
     *
     * @param  {Object}   credentials - login info
     * @param  {Function} callback    - optional
     * @return {Promise}
     */
    login: function (credentials, callback) {
      var callback = callback || angular.noop;
      var deferred = $q.defer();
      $http.post('/api/signin', {
        username: credentials.username,
        password: credentials.password
      })
      .success(function (data) {
        var token = data.sessionToken;
        $cookieStore.put(tokenName, token);
        currentAccount = Accounts.me();
        deferred.resolve();
        return callback();
      })
      .error(function (err) {
        this.logout();
        deferred.reject(err);
        return callback(err);
      }.bind(this));

      return deferred.promise;
    },

    /**
     * Deletes access token and user info
     *
     * @param  {Function}
     */
    logout: function() {
      $cookieStore.remove(tokenName);
      currentAccount = {};
    },

    /**
     * Creates a new user
     *
     * @param  {Object}   user     - user info
     * @param  {Function} callback - optional
     * @return {Promise}
     */
    signup: function (account, callback) {
      var callback = callback || angular.noop;
      var deferred = $q.defer();
      $http.post('/api/signup', {
        fullName: account.fullName,
        email: account.email,
        password: account.password
      })
      .success(function (data) {
        deferred.resolve(data);
        return callback(data);
      })
      .error(function (err) {
        this.logout();
        deferred.reject(err);
        return callback(err);
      }.bind(this));

      return deferred.promise;
    },

    /**
     * Gets all available info on authenticated user
     *
     * @return {Object} user
     */
    getCurrentAccount: function () {
      return currentAccount;
    },

    /**
     * Sets current user based on access token
     */
    setCurrentAccount: function () {
      if($cookieStore.get(tokenName)) {
        currentAccount = Accounts.me();
      }
    },

    /**
     * Waits for currentAccount to resolve before checking if user is logged in
     */
    isLoggedInAsync: function (callback) {
      if(currentAccount.hasOwnProperty('then')) {
        currentAccount.then(function (user) {
          currentAccount = user;
          callback(true);
        }).catch(function() {
          callback(false);
        });
      }
      else if(currentAccount.hasOwnProperty('username')) {
        callback(true);
      }
      else {
        callback(false);
      }
    }
  };

});
