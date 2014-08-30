'use strict';

var unirest = require('unirest');
var config = require('../../config/environment');

exports.index = function(req, res) {
  // TODO: add validation
  var data = {
    username: req.body.username,
    password: req.body.password
  };

  // TODO: add proper error logging
  var signinUrl = config.api.url + '/auth/login';
  unirest.post(signinUrl)
    .headers({ 'Accept': 'application/json' })
    .send(data)
    .end(function (response) {
      if(response.ok) {
        res.json(response.body);
      }
      else {
        if(response.error.code === 'ECONNREFUSED') {
          console.error('Connection to Pifarm API server is not available');
          return res.send(500);
        }
        else {
          return res.send(401);
        }
      }      
    });
};