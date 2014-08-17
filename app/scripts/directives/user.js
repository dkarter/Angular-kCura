'use strict';

/**
 * @ngdoc directive
 * @name angularKcuraApp.directive:user
 * @description
 * # user
 */
angular.module('angularKCuraApp')
  .directive('myUser', function () {
    return {
      restrict: 'E',
      template: '<td>{{user.name}}</td>'
      // templateUrl: 'views/user-directive.html'
    };
  });
