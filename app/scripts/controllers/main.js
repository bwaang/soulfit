'use strict';

/**
 * @ngdoc function
 * @name soulfitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soulfitApp
 */

angular.module('soulfitApp')
  .controller('MainCtrl', ['$scope', 'soulfitDataService', function ($scope, soulfitDataService) {
    $scope.sds = soulfitDataService; // Stores data from $scope.sds.soulfitData
    var dataUrl = 'https://spreadsheets.google.com/feeds/list/1zWeJSlmhone9MzwoUNxCFzBIySOMEo8OoGhClgZLGS4/default/public/values?alt=json';
    var localJSONData = 'json/testdata.json';

    $scope.chartTestData = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [2, 3, 4, 3, 2, 3, 5, 8, 9, 8, 6, 5],
          [0, 1, 2, 4, 3, 2, 2, 4, 7, 9, 8, 7],
          [1, 2, 3, 2, 1, 2, 3, 3, 4, 6, 4, 3]
        ]
      };

    $scope.chartoptions = {
      fullWidth: true,
      seriesBarDistance: 20,
      stackBars: true,
      lineSmooth: true,
      axisX: {
        showGrid: true
      },
      axisY: {
        scaleMinSpace: 30
      }
    };

    $scope.sds.setSoulfitDataFromUrl(dataUrl); // setting data internally to $scope.sds.soulfitData

    // Use a callback to fetch data into the $scope variable
    $scope.sds.getJSON(localJSONData, function(data) {
      $scope.data = data;
    });

    $scope.setCtData = function(data) {
      $scope.sds.generateChartistData(data);
    };
  }]);
