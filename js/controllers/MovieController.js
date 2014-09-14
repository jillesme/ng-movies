app.controller('MovieController', function ($scope, Search, $routeParams, $document) {
  var vm = this;

  Search.getMovieByID($routeParams.id).then(function () {
    vm.result = Search.movie;
    $document[0].title = vm.result.Title || '';
    var request = Search.getMoviePoster(vm.result.Poster);
    if (request) {
      request.then(function () {
        vm.Poster = Search.poster;
      });
    }
  });

});

