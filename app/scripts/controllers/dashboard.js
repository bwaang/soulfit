'use strict';

/**
 * @ngdoc function
 * @name soulfitApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the soulfitApp
 */
angular.module('soulfitApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
