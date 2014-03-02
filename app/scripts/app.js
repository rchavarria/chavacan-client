'use strict';

angular.module('chavacanClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/rentings', {
        templateUrl: 'views/rentings.html',
        controller: 'MainCtrl'
      })
      .when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'MainCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'MainCtrl'
      })
      .when('/wanttosell', {
        templateUrl: 'views/wanttosell.html',
        controller: 'MainCtrl'
      })
      .when('/highlights', {
        templateUrl: 'views/highlights.html',
        controller: 'MainCtrl'
      })
      .when('/financing', {
        templateUrl: 'views/financing.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
