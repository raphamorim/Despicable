'use strict';

// Declare app level module which depends on filters, and services
var despicable = angular.module('despicable', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
    // ,'ngRoute'
  ]);

// despicable.config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//
//     // route for the signin page
// 		.when('/signin', {
// 			templateUrl : 'partials/signin.html',
// 			controller  : 'signinController'
// 		})
//
// 		// route for the newbie signup page
// 		.when('/signupNewbie', {
// 			templateUrl : 'partials/signupNewbie.html',
// 			controller  : 'newbieController'
// 		})
//
// 		// route for the enterprise signup page
// 		.when('/signupEnterprise', {
// 			templateUrl : 'partials/signupEnterprise.html',
// 			controller  : 'enterpriseController'
// 		});
// }]);
