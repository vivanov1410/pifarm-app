'use strict';

var unirest = require('unirest');
var config = require('../../config/environment');

exports.index = function (req, res) {
  // TODO: add validation
  var data = {
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password
  };

  // TODO: add proper error logging
  var signupUrl = config.api.url + '/auth/signup';
  unirest.post(signupUrl)
    .headers({ 'Accept': 'application/json' })
    .send(data)
    .end(function (response) {
      if(response.status === 201) {
        res.json(response.body);
      }
      else {
        if(response.error.code === 'ECONNREFUSED') {
          console.error('Connection to Pifarm API server is not available');
          return res.send(500);
        }
        else {
          return res.send(response.code, response.body);
        }
      }
    });
};