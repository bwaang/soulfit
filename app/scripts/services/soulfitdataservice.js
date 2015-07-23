'use strict';

/**
 * @ngdoc service
 * @name soulfitApp.soulfitDataService
 * @description
 * # soulfitDataService
 * Service in the soulfitApp.
 */
angular.module('soulfitApp')
  .service('soulfitDataService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    var soulScope = this; // soulScope preserves 'this' scope for internal use
    soulScope.soulfitData = undefined;
    soulScope.ctData = undefined;
    soulScope.ctTimeData = undefined;

    /**
     * Generic strToInt function
     **/
    var strToInt = function(str) {
      return (str === '') ? 0 : parseInt(str);
    };

    // Sets the data to this.soulfitData
    soulScope.setSoulfitDataFromUrl = function(url) {
      // success callback takes in data, status, header, config
      $http.get(url)
            .success(function(data) {
              soulScope.soulfitData = soulScope.sanitizeSoulfitDataJSON(data);
              soulScope.generateChartistData(soulScope.soulfitData);
            })
            .error(function(err) {
              console(err);
            });
    };

    soulScope.getJSON = function(url, callback) {
      $http.get(url)
            .success(callback)
            .error(function(err) {
              console(err);
            });
    };

    /**
     * Utility API for getting Soulfit Data from Google Sheets.  Written by @ldanielw1
     */
    soulScope.sanitizeSoulfitDataJSON = function(soulfitData) {
      var rows = soulfitData.feed.entry;
      var jsonData = [];
      for (var row in rows) {
        var entry = {};
        entry.timestamp = rows[row].gsx$timestamp.$t;
        entry.gender = rows[row].gsx$brotherorsister.$t.replace('[0-9]', '').toLowerCase();
        entry.name = rows[row].gsx$name.$t.replace('[0-9]', '');
        entry.pages = strToInt(rows[row].gsx$howmanypagesofyourbookdidyouread.$t.replace(/\D/g, ''));
        entry.chapters = strToInt(rows[row].gsx$howmanychaptersofthebibledidyouread.$t.replace(/\D/, ''));
        entry.running = strToInt(rows[row].gsx$howmanyminutesdidyourun.$t.replace(/\D/, ''));

        if (entry.timestamp !== '' && (entry.pages !== 0 || entry.chapters !== 0 || entry.running !== 0)) {
          jsonData.push(entry);
        }
      }
      return jsonData;
    };

    soulScope.filterByName = function(name, soulfitData) {
      var jsonData = {};
      // Write code here to filter out people by name

      return jsonData;
    };

    soulScope.generateChartistData = function(soulfitData) {
      // Write code here to generate Chartist Data to the below
      // See the Chartist API at https://gionkunz.github.io/chartist-js/

      soulScope.ctData = {};
      soulScope.ctTimeData = {};
    };
  }]);
