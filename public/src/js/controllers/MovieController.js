function MovieController (SearchService) {
  var vm = this;

  vm.result = SearchService.movie;
  vm.loading = SearchService.loading;
}

angular.module('ngMovies')
  .controller('MovieController', MovieController);
