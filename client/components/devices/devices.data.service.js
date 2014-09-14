'use strict';

angular.module('pifarm.app')
.factory('DevicesData', function () {

  return {

    types: [
      {
        key: 'RaspberryPi',
        value: 'Raspberry Pi'
      }
    ]

  };

});