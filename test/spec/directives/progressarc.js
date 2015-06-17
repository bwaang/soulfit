'use strict';

describe('Directive: progressArc', function () {

  // load the directive's module
  beforeEach(module('soulfitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<progress-arc></progress-arc>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the progressArc directive');
  }));
});
