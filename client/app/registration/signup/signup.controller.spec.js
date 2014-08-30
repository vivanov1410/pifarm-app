'use strict';

describe('Controller: SignupCtrl', function () {

  // Load the controller's module
  beforeEach(module('pifarm.settings'));
  beforeEach(module('pifarm.app'));

  var SignupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupCtrl = $controller('SignupCtrl', {
      $scope: scope
    });
  }));

  it('should init controller properties', function () {
    expect(scope.account).toBeDefined();
    expect(scope.loading).toBeFalsy();
    expect(scope.error).toBeFalsy();
  });

  describe('method: startLoading', function () {
    it('should set $scope.loading to true', function () {
      scope.startLoading();
      expect(scope.loading).toBeTruthy();
    });

    it('should set signup button text to loading state', function () {
      scope.startLoading();
      expect(scope.signupButtonText).toContain('...');
    });
  });

  describe('method: stopLoading', function () {
    it('should set $scope.loading to false', function () {
      scope.stopLoading();
      expect(scope.loading).toBeFalsy();
    });

    it('should set signup button text to regular state', function () {
      scope.stopLoading();
      expect(scope.signupButtonText).toBe('Sign Up');
    });
  });

  describe('method: resetErrors', function () {
    it('should set all errors to false', function () {
      scope.error = true;
      scope.resetErrors();
      expect(scope.error).toBeFalsy();
    });
  });

  describe('method: signup', function () {
    // TODO: add tests
  });
  
});
