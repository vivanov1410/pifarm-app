'use strict';

angular.module('pifarm.app')
.factory('DevicesData', function () {

  return {

    types: [
      {
        key: 'raspberrypi',
        value: 'Raspberry Pi'
      }
    ]

  };

});