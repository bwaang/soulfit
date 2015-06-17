'use strict';

describe('Service: soul', function () {

  // load the service's module
  beforeEach(module('soulfitApp'));

  // instantiate service
  var soul;
  beforeEach(inject(function (_soul_) {
    soul = _soul_;
  }));

  it('should do something', function () {
    expect(!!soul).toBe(true);
  });

});
