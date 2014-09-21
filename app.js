(function () {
  "use strict";

  var app = angular.module('ngMovies', ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/search-view.html',
        controller: 'SearchController',
        controllerAs: 'search'
      })
      .when('/movie/:id', {
        templateUrl: './views/movie-view.html',
        controller: 'MovieController',
        controllerAs: 'movie',
        resolve: {}
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  window.app = app;
})();
