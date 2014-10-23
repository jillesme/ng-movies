function MovieController ($scope, $routeParams, SearchService) {
  var vm = this;

  vm.result = SearchService.movie;
  vm.loading = SearchService.loading;
}

angular.module('ngMovies')
  .controller('MovieController', MovieController);
