app.controller('MovieController', function ($scope, Search, $routeParams, $document) {
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

});

