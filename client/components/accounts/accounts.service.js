'use strict';

angular.module('pifarm.app')
.factory('Accounts',
function (Restangular) {

  var route = 'accounts';

  return {

    me: function () {
      return Restangular.one(route, 'me').get();
    },

    all: function () {
      return Restangular.all(route).getList();
    },

    find: function (id) {
      return Restangular.one(route, id).get();
    },

    create: function (account) {
      return Restangular.all(route).post(account);
    },

    update: function (account) {
      return account.put();
    },

    remove: function (account) {
      return Restangular.one(route, account.id).remove();
    }

  };

});