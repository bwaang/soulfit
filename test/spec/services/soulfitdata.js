'use strict';

describe('Service: soulfitData', function () {

  // load the service's module
  beforeEach(module('soulfitApp'));

  // instantiate service
  var soulfitData;
  beforeEach(inject(function (_soulfitData_) {
    soulfitData = _soulfitData_;
  }));

  it('should do something', function () {
    expect(!!soulfitData).toBe(true);
  });

});
