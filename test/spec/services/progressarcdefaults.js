'use strict';

describe('Service: progressArcDefaults', function () {

  // load the service's module
  beforeEach(module('soulfitApp'));

  // instantiate service
  var progressArcDefaults;
  beforeEach(inject(function (_progressArcDefaults_) {
    progressArcDefaults = _progressArcDefaults_;
  }));

  it('should do something', function () {
    expect(!!progressArcDefaults).toBe(true);
  });

});
