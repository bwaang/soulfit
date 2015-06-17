'use strict';

/**
 * @ngdoc service
 * @name soulfitApp.progressArcDefaults
 * @description
 * # progressArcDefaults
 * Provider in the soulfitApp.
 */
angular.module('soulfitApp')
  .provider('progressArcDefaults', function () {
      var defaults = {
      size: 200,
      strokeWidth: 20,
      stroke: 'black',
      background: null
      };

      this.setDefault = function (name, value) {
          defaults[name] = value;
          return this;
      };

      this.$get = function () {
          return function (attr) {
              angular.forEach(defaults, function (value, key) {
                  if (!attr[key]) {
                      attr[key] = value;
                  }
              });
          };
      };
  });
