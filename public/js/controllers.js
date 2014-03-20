'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

  controller('mainController', function($scope) {
      $scope.message = 'You\'re in home';
  })

  .controller('aboutController', function($scope) {
      $scope.message = 'What is Despicable? Be Mean, without lose your style.';
      $scope.message += 'This project use MEAN stack: MongoDB, Express, AngularJS and NodeJS.';
  });
