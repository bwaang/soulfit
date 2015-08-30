'use strict';

describe('Service: bibleService', function () {

  // load the service's module
  beforeEach(module('soulfitApp'));

  // instantiate service
  var bibleService;
  beforeEach(inject(function (_bibleService_) {
    bibleService = _bibleService_;
  }));

  it('should do something', function () {
    expect(!!bibleService).toBe(true);
  });

});
