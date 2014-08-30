'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('pifarm.settings'));
  beforeEach(module('pifarm.app'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach current year to scope', function () {
    expect(scope.currentYear).toBe(2014);
  });
  
});
