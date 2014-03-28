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
        templateUrl: 'views/main_es.html'
      })
      .when('/where', {
        templateUrl: 'views/where_es.html'
      })
      .when('/program', {
        templateUrl: 'views/program_es.html'
      })
      .when('/resources', {
        templateUrl: 'views/recursos_es.html',
        controller: 'resourcesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
