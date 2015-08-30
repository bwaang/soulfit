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
    $scope.samCho = 'How are you';

    $scope.chartTestData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
      ]
    };

    $scope.lineData = {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [{
            name: 'Fibonacci sequence',
            data: [1, 2, 3, 5, 8, 13]
        }, {
            name: 'Golden section',
            data: [1, 1.618, 2.618, 4.236, 6.854, 11.09]
        }]
    };

    $scope.chartoptions = {
      fullWidth: true,
      seriesBarDistance: 20,
      stackBars: true,
      lineSmooth: true
    };

    $scope.sds.setSoulfitDataFromUrl(dataUrl);
    // setting data internally to $scope.sds.soulfitData

    // Use a callback to fetch data into the $scope variable
    $scope.sds.getJSON(localJSONData, function(data) {
      $scope.data = data;
    });

    $scope.setCtData = function(data) {
      $scope.sds.generateChartistData(data);
    };
  }]);
