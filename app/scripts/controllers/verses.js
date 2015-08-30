'use strict';

/**
 * @ngdoc function
 * @name soulfitApp.controller:VersesCtrl
 * @description
 * # VersesCtrl
 * Controller of the soulfitApp
 */
angular.module('soulfitApp')
  .controller('VersesCtrl', ['$scope', 'bibleService', function ($scope, bibleService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var bs = bibleService;

    $scope.reference = 'John 3:16';
    $scope.verse = 'In the Beginning';

    bs.getVerse('John 3:16')

  }]);
