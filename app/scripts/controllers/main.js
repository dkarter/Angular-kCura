'use strict';

/**
 * @ngdoc function
 * @name angularKcuraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularKcuraApp
 */
angular.module('angularKCuraApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
