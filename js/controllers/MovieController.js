function MovieController ($scope, $routeParams, Search) {
  var vm = this;

  vm.result = Search.movie;
}

angular.module('ngMovies')
  .controller('MovieController', MovieController);
