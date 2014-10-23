function SearchService ($http) {
  var omdbUrl = 'http://www.omdbapi.com/';
  var apiUrl = 'http://localhost:3020/';
  var Search = {};

  SearchService.loading = false;

  SearchService.getMovieByTitle = function (title) {
    return $http.get(omdbUrl + '?s=' + title)
        .success(function (data) {
          if (!data.hasOwnProperty('Error')) {
            // omdb returns a Search object containing all the movies
            SearchService.movies = data.Search;
          }
        })
        .error(function (error) {
          console.log(error);
        });
    };

  SearchService.getMovieByID = function (id) {
    SearchService.loading = true;
    return $http.get(apiUrl + '?i=' + id)
        .success(function (data) {
          SearchService.loading = false;
          if (!data.hasOwnProperty('Error')) {
            SearchService.movie = data;
          }
        })
        .error(function (error) {
          console.log(error);
        });
  };

  return SearchService;
}

angular.module('ngMovies')
  .factory('SearchService', SearchService);
