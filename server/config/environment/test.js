'use strict';

// Test specific configuration
// ===========================
var api = {
  protocol: 'http',
  hostname: 'pifarm-api.herokuapp.com',
  version: 'v1'
};

api.url = api.protocol + '://' + api.hostname + '/' + api.version; 

module.exports = {
  
  api: api

};