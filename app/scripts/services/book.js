'use strict';

/**
 * @ngdoc service
 * @name soulfitApp.Book
 * @description
 * # Book
 * Factory in the soulfitApp.
 */
angular.module('soulfitApp')
  .factory('Book', function () {
    // Service logic
    // ...
    function Book(title, pages) {
      this.title = title;
      var totalPages = pages;
      var pagesRead = 0;
      var progress = 0;

      this.setPagesRead = function(pages) {
        if (pages < totalPages) {
          pagesRead = pages;
          progress = pagesRead / totalPages;
        }
        else {
          console.log('Setting more pages than total pages!');
        }
      };

      this.getPagesRead = function() {
        return pagesRead;
      };

      this.setTotalPages = function(pages) {
        if (pages > pagesRead) {
          pagesRead = pages;
          progress = pagesRead / totalPages;
        }
        else {
          console.log('Setting less pages than pages already read!');
        }
      };

      this.getTotalPages = function() {
        return totalPages;
      };

      this.getProgress = function() {
        return progress;
      };

    }

    return Book;
  });
