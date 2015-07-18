'use strict';

describe('Service: soulfitDataService', function () {

  // load the service's module
  beforeEach(module('soulfitApp'));

  // instantiate service
  var soulfitDataService;
  beforeEach(inject(function (_soulfitDataService_) {
    soulfitDataService = _soulfitDataService_;
  }));

  it('should do something', function () {
    expect(!!soulfitDataService).toBe(true);
  });

});
