'use strict';

// Production specific configuration
// =================================
var api = {
  protocol: 'http',
  hostname: 'pifarm.apphb.com',
  version: 'v1'
};

api.url = api.protocol + '://' + api.hostname + '/' + api.version; 

module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  api:      api

};