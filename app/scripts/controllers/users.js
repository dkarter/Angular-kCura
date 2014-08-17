'use strict';

//USERS CONTROLLER

angular.module('angularKCuraApp')
	.controller('UsersCtrl', ['$scope', 'usersFactory', function($scope, usersFactory){
	
	function init () {
		usersFactory.getUsers().success(function (data) {
			$scope.users = data;
		});		
	}

	init();

}]).directive('userView', function () {
		return {
			restrict: 'E',
			template: '<dl class="dl-horizontal" ng-repeat="user in users"><dt>Picture</dt><dd><img ng-src="{{user.picture}}" /></dd>    <dt>Name</dt>  <dd>{{user.name}}</dd><dt>Gender</dt>  <dd>{{user.gender | uppercase | limitTo:1 }}</dd>    <dt>Eye Color</dt>  <dd>{{user.eyeColor}}</dd>    <dt>Company</dt>  <dd>{{user.company}}</dd>    <dt>Email</dt>  <dd>{{user.email}}</dd>    <dt>Balance</dt>  <dd>{{user.moneyInTheBank | currency}}</dd>    <dt>About</dt>  <dd>{{user.about | cut:true:20 }}</dd></dl>'
		};
	});