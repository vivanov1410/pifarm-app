'use strict';

var unirest = require('unirest');
var config = require('../../config/environment');

exports.index = function (req, res) {
  // TODO: add validation
  var data = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password
  };

  // TODO: add proper error logging
  var signupUrl = config.api.url + '/auth/signup';
  unirest.post(signupUrl)
    .headers({ 'Accept': 'application/json' })
    .send(data)
    .end(function (response) {
      console.log(response.error)
      if(response.error) {
        if(response.error.code === 'ECONNREFUSED') {
          console.error('Connection to Pifarm API server is not available');
          return res.send(500);
        }
        else {
          return res.send(response.code, response.body);
        }
      }
      
      console.log('sending body');
      res.json(response.body);
    });
};