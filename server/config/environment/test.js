'use strict';

// Test specific configuration
// ===========================
var api = {
  protocol: 'http',
  hostname: 'pifarm.apphb.com',
  version: 'v1'
};

api.url = api.protocol + '://' + api.hostname + '/' + api.version; 

module.exports = {
  
  api: api

};