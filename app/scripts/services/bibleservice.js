'use strict';

/**
 * @ngdoc service
 * @name soulfitApp.bibleService
 * @description
 * # bibleService
 * Service in the soulfitApp.
 */
angular.module('soulfitApp')
  .service('bibleService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var bibleScope = this;
    bibleScope.verse = '';

    bibleScope.getVerse = function(url) {
      var apikey = '5Yl8sHUhMxEl1aBwVB35Rv78Uxqu3QgPb2YYaQY7';
      var url = 'https://bibles.org/v2/eng-ESV/passages.js?q[]=john+3%3A16';

      $http.get(url)
            .success(function(data) {
              bibleScope.verse = data;
            })
            .error(function(err) {
              console(err);
            });
    };

  });
