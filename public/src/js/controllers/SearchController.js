function SearchController (SearchService) {

    var vm = this;

    vm.movies = SearchService.movies;
    vm.title = SearchService.title;

    vm.getMovieByTitle = function (title) {
      if (title.length <= 1) {
        return;
      }
      SearchService.getMovieByTitle(title).then(function () {
        vm.movies = SearchService.movies;
      });
    };

}
angular.module('ngMovies')
  .controller('SearchController', SearchController);
