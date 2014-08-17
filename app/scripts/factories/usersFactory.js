angular.module('angularKCuraApp')
	.factory('usersFactory', function ($http) {
	'use strict';
	var uFactory = {};

	uFactory.getUsers = function () {
		return $http.get('/users.json');	
	};

	return uFactory;
});