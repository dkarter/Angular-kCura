'use strict';

describe('Filter: cut', function () {

  // load the filter's module
  beforeEach(module('angularKCuraApp'));

  // initialize a new instance of the filter before each test
  var cut;
  beforeEach(inject(function ($filter) {
    cut = $filter('cut');
  }));

  it('should return a cut string with an elipsis at its end', function () {
    var text = 'angularjs is a great framework';
    expect(cut(text, false, 4)).toBe('angu …');
  });

});
