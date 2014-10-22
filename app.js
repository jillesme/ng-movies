function RouterConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/search-view.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .when('/movie/:id', {
        templateUrl: './views/movie-view.html',
        controller: 'MovieController',
        controllerAs: 'vm',
        resolve: {} // TODO: Resolve on Search.getMovieByID
      })
      .otherwise({
        redirectTo: '/'
      });
}

angular.module('ngMovies', ['ngRoute'])
  .config(RouterConfig);
