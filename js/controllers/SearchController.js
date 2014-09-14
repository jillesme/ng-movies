app.controller('SearchController', function ($scope, Search, $document) {
  var vm = this;

  vm.movies = Search.movies;
  vm.title = Search.title;

  if (!vm.title) {
    $document[0].title = 'Search Movies & Series';
  } else {
    $document[0].title = 'Searched for \'' + vm.title + '\'';
  }


  vm.getMovieByTitle = function (title) {
    if (title.length <= 1) {
      $document[0].title = 'Search Movies & Series';
      return;
    }
    $document[0].title = 'Searching for \'' + title + '\'';
    Search.title = title;
    Search.getMovieByTitle(title).then(function () {
      vm.movies = Search.movies;
    });
  };

});
