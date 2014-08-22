'use strict';

var config = require('../../config/environment');

// Get list of settingss
exports.index = function(req, res) {
  res.json({
    currentYear: new Date().getFullYear(),
    apiUrl: config.api.url
  });
};