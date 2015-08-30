'use strict';

describe('Controller: VersesCtrl', function () {

  // load the controller's module
  beforeEach(module('soulfitApp'));

  var VersesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VersesCtrl = $controller('VersesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VersesCtrl.awesomeThings.length).toBe(3);
  });
});
