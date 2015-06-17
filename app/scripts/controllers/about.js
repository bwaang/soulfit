'use strict';

/**
 * @ngdoc function
 * @name soulfitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the soulfitApp
 */
angular.module('soulfitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
