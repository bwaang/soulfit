'use strict';

/**
 * @ngdoc factory
 * @name soulfitApp.soulfitData
 * @description
 * # soulfitData
 * Service in the soulfitApp.
 */
angular.module('soulfitApp')
  .factory('Soul', ['$http', function ($http) {
  	function Soul(name) {
		this.name = name;
		this.verses = 0;
		this.bible = 0;
		var books = []; // Array of books

		// Takes in a Book
		this.addBook = function(book) {
			books.push(book);
		};

		this.getBooks = function() {
			return books;
		};
	};

	return Soul;

    // return $http.get('json/testdata.json')
    // 		.success(function(data) { return data; })
    // 		.error(function(err) { return err; });
  }]);
