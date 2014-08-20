'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('POST /api/signup', function() {

  it('should respond with account object on success', function(done) {
    request(app)
      .post('/api/signup')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        
        var account = res.body;
        account.should.have.property(username);
        account.should.have.property(sessionToken);
        done();
      });
  });

});