function MovieController ($scope, $routeParams, Search) {
    var vm = this;

    Search.getMovieByID($routeParams.id).then(function () {
      vm.result = Search.movie;
      var request = Search.getMoviePoster(vm.result.Poster);
      if (request) {
        request.then(function () {
          vm.Poster = Search.poster;
        });
      }
    });

}

angular.module('ngMovies')
  .controller('MovieController', MovieController);
