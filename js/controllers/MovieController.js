function MovieController ($scope, $routeParams, Search) {
  var vm = this;

  vm.result = Search.movie;
  vm.loading = Search.loading;
}

angular.module('ngMovies')
  .controller('MovieController', MovieController);
