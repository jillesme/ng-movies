function RouterConfig ($routeProvider) {
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
}

angular.module('ngMovies', ['ngRoute'])
  .config(RouterConfig);
