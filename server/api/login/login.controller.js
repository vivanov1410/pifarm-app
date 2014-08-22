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
  var loginUrl = config.api.url + '/auth/login';
  unirest.post(loginUrl)
    .headers({ 'Accept': 'application/json' })
    .send(data)
    .end(function (response) {
      // TODO: remove magic strings
      if(response.ok) {
        res.json(response.body);
      }
      else {
        res.send(401);
      }
    });
};