'use strict';

/**
 * @ngdoc function
 * @name soulfitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soulfitApp
 */
angular.module('soulfitApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  	// $http get is not working, will need to debug
    $http.get('json/testdata.json').success(function(data) {
    	$scope.souls = data;
    });

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

    ]

    $scope.souls = [
	    {
	        "name": "Neil", 
	        "verses": 40, 
	        "pages": 20, 
	        "books": 6
	    },
	    {
	        "name": "Kevin", 
	        "verses": 92, 
	        "pages": 20, 
	        "books": 6
	    },
	    {
	        "name": "Hans", 
	        "verses": 40, 
	        "pages": 20, 
	        "books": 6
	    }, 
	    {
	        "name": "Jasper", 
	        "verses": 40, 
	        "pages": 20, 
	        "books": 6
	    }, 
	    {
	        "name": "Tony", 
	        "verses": 30, 
	        "pages": 20, 
	        "books": 6
	    }, 
	    {
	        "name": "Audrey", 
	        "verses": 40, 
	        "pages": 20, 
	        "books": 62
	    }, 
	    {
	        "name": "Sam", 
	        "verses": 40, 
	        "pages": 20, 
	        "books": 61
	    },  
	    {
	        "name": "Ching", 
	        "verses": 40, 
	        "pages": 20, 
	        "books": 61
	    }, 
	    {
	        "name": "Taipei", 
	        "verses": 40, 
	        "pages": 20, 
	        "books": 61
	    }
	];
  }]);
