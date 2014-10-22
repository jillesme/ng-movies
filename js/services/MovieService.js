function SearchFactory ($http, $q) {
  var omdbUrl = 'http://www.omdbapi.com/';
  var apiUrl = 'http://localhost:3020/';
  var Search = {};

  Search.getMovieByTitle = function (title) {
    return $http.get(omdbUrl + '?s=' + title)
        .success(function (data) {
          if (!data.hasOwnProperty('Error')) {
            // omdb returns a Search object containing all the movies
            Search.movies = data.Search;
          }
        })
        .error(function (error) {
          console.log(error);
        });
    };

  Search.getMovieByID = function (id) {
    var defer = $q.defer();
    return $http.get(apiUrl + '?i=' + id)
        .success(function (data) {
          defer.resolve();
          if (!data.hasOwnProperty('Error')) {
            Search.movie = data;
          }
        })
        .error(function (error) {
          defer.reject();
          console.log(error);
        });
  };

  return Search;
}

angular.module('ngMovies')
  .factory('Search', SearchFactory);
