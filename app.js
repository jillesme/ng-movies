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
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
}

angular.module('ngMovies', ['ngRoute'])
  .config(RouterConfig);
