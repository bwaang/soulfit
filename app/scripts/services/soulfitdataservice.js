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
    soulScope.totalRunning = undefined;
    soulScope.totalPages = undefined;

    /**
     * Generic strToInt function
     **/
    var strToInt = function(str) {
      return (str === '') ? 0 : parseInt(str);
    };

    var isInArray = function(arr, val) {
      for(var i in arr) {
        if(arr[i] === val) {
          return i;
        }
      }
      return false;
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

    soulScope.filterByName = function(name) {
      var sfd = soulScope.soulfitData;
      var jsonData = [];
      var totalPages = 0;
      var totalChapters = 0;
      var totalRunning = 0;

      for(var i in sfd) {
        if(sfd[i].name === name || name === '') {
          totalPages += sfd[i].pages;
          totalChapters += sfd[i].chapters;
          totalRunning += sfd[i].running;
          jsonData.push(sfd[i]);
        }
      }

      soulScope.generateChartistData(jsonData); // This causes issues
      return jsonData;
    };

    soulScope.generateChartistData = function(soulfitData) {
      var SeriesObj = function(name) {
        this.name = name;
        this.data = [];
      };

      var sfd = soulfitData;
      var labels = [];
      var series = [ new SeriesObj('pages'),
                     new SeriesObj('chapters'),
                     new SeriesObj('running') ];
      var timeLabels = [];
      var timeSeries = [ new SeriesObj('pages'),
                     new SeriesObj('chapters'),
                     new SeriesObj('running') ];

      // Reset total running / total pages
      soulScope.totalPages = 0;
      soulScope.totalRunning = 0;

      for(var i in sfd) {
        var j = isInArray(labels, sfd[i].name);
        if(j) {
          series[0].data[j] += sfd[j].pages;
          series[1].data[j] += sfd[j].chapters;
          series[2].data[j] += sfd[j].running;
        }
        else { // New name;
          labels.push(sfd[i].name);
          series[0].data.push(sfd[i].pages);
          series[1].data.push(sfd[i].chapters);
          series[2].data.push(sfd[i].running);
        }
        soulScope.totalPages += sfd[i].pages;
        soulScope.totalRunning += sfd[i].running;
        timeLabels.push(sfd[i].timestamp.split(' ')[0]);
        timeSeries[0].data.push(sfd[i].pages);
        timeSeries[1].data.push(sfd[i].chapters);
        timeSeries[2].data.push(sfd[i].running);
      }

      soulScope.ctData = { 'labels': labels, 'series': series };
      soulScope.ctTimeData = { 'labels': timeLabels, 'series': timeSeries };
    };
  }]);
