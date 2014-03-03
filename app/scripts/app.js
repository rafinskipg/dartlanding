'use strict';

angular.module('dartpresentationApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/where', {
        templateUrl: 'views/where.html',
        controller: 'WhereCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
