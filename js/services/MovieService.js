app.factory('Search', ['$http', function ($http) {
  var URL = 'http://www.omdbapi.com/';
  var Search = {};

  Search.getMovieByTitle = function (title) {
    return $http.get(URL + '?s=' + title)
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
    return $http.get(URL + '?i=' + id + '&plot=full')
        .success(function (data) {
          if (!data.hasOwnProperty('Error')) {
            Search.movie = data;
          }
        })
        .error(function (error) {
          console.log(error);
        });
  };

  Search.getMoviePoster = function (url) {
    if (url === 'N/A') return;
    return $http.get('http://localhost:3020?img=' + url)
      .success(function (data) {
        Search.poster = data;
      })
      .error(function (error) {
          console.log(error);
      });
  };

  return Search;
}]);
