function MovieController ($scope, $routeParams, Search) {
    var vm = this;

    Search.getMovieByID($routeParams.id).then(function () {
      vm.result = Search.movie;
    });

}

angular.module('ngMovies')
  .controller('MovieController', MovieController);
