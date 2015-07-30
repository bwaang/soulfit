'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('soulfitApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should chartData and chartOptions in scope', function () {
    expect(scope.chartoptions).toBeDefined();
    expect(scope.chartTestData).toBeDefined();
  });

  it('should create a soulfitdata service', function () {
    expect(scope.sds).toBeDefined();
  });
});
