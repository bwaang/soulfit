'use strict';

/**
 * @ngdoc factory
 * @name soulfitApp.soulfitData
 * @description
 * # soulfitData
 * Service in the soulfitApp.
 */
angular.module('soulfitApp')
  .factory('soulfitData', ['$http', function ($http) {
    return $http.get('json/testdata.json')
    		.success(function(data) { return data; })
    		.error(function(err) { return err; });
  }]);
