'use strict';

// Development specific configuration
// ==================================
var api = {
  protocol: 'http',
  hostname: 'localhost:3000',
  version: 'v1'
};

api.url = api.protocol + '://' + api.hostname + '/' + api.version; 

module.exports = {
  
  api: api

};