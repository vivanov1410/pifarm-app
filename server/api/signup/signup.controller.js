'use strict';

var unirest = require('unirest');
var config = require('../../config/environment');

exports.signup = function (req, res) {
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
      // TODO: remove magic strings
      if(response.code === 201) {
        res.json(response.body);
      }
      else {
        res.send(401);
      }
    });
};