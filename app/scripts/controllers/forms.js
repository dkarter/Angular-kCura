'use strict';

/**
 * @ngdoc function
 * @name angularKcuraApp.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the angularKcuraApp
 */
angular.module('angularKCuraApp')
  .controller('FormsCtrl', ['$scope', function ($scope) {
    $scope.review = {};
    
    $scope.reviews = [];

    $scope.addReview = function () {
      $scope.reviews.push($scope.review);
      $scope.review = {};
      $scope.commentForm.$setPristine();
    };
  }]);
