'use strict';

angular.module('pifarm.app')
.factory('Inspector', function () {

  return {

    clientError: function (err) {
      return err.type === 'InvalidRequestError';
    },

    serverError: function (err) {
      return err.type === 'ApiError';
    },

    account: {
      duplicate: function (err) {
        return err.code === 'AccountDuplicate';
      }
    }

  };

});