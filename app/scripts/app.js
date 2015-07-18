'use strict';

/**
 * @ngdoc overview
 * @name soulfitApp
 * @description
 * # soulfitApp
 *
 * Main module of the application.
 */
angular
  .module('soulfitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        activeroute: 'Dashboard'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activeroute: 'About'
      })
      .when('/testing', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activeroute: 'Testing'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('IndexCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.topnav = ['Dashboard', 'About', 'Testing'];
    $scope.sidenav = ['Dashboard', 'About', 'Graphs', 'Testing'];
    $scope.activeClass = function (navroute) {
      if ($route.current.activeroute === navroute) {
        return 'active';
      }
    }
  }]);
