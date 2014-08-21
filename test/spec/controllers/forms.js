'use strict';

describe('Controller: FormsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularKCuraApp'));

  var FormsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormsCtrl = $controller('FormsCtrl', {
      $scope: scope
    });
  }));

  
});
