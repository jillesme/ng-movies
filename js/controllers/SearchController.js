app.controller('SearchController', function ($scope, Search, $document) {
  var vm = this;

  vm.movies = Search.movies;
  vm.title = Search.title;

  vm.getMovieByTitle = function (title) {
    if (title.length <= 1) {
      return;
    }
    Search.title = title;
    Search.getMovieByTitle(title).then(function () {
      vm.movies = Search.movies;
    });
  };

});
