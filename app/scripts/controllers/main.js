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
    
    $scope.categories = [
    	{
    		name: 'Verses',
    		description: '100 Verses every self-respecting Christian should know'
    	},
    	{
    		name: 'Pages',
    		description: 'Read more about the heroes of faith this summer!'
    	},
    	{
    		name: 'Bible',
    		description: 'How much of the Bible have you read?'
    	}
    ];

    $scope.sds.setSoulfitDataFromUrl(dataUrl); // setting data internally to $scope.sds.soulfitData

    // Use a callback to fetch data into the $scope variable
    $scope.sds.getJSON(localJSONData, function(data) {
      $scope.data = data;
    });
  }]);
