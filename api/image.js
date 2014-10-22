var http = require('http');
var request = require('request').defaults({ encoding: null });

var headers = {
  'Referer': null,
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
};

var result;

function error (response) {
  response.writeHead(404);
  response.end();
  return;
}

http.createServer(function (req, res) {
  var API = 'http://www.omdbapi.com';
  var url = API + req.url + '&plot=full';
  var start = new Date().getTime();

  // Get the omdb data
  request.get({ url: url }, function (err, omdbResponse, omdbData) {

    if (!err && omdbResponse.statusCode === 200) {
      // Assign the result to the omdb api data
      result = JSON.parse(omdbData.toString());

      // Make another request, to the imdb image
      request.get({ url: result.Poster, headers: headers }, function (err, imdbResponse, imdbData) {

        if (!err && imdbResponse.statusCode === 200) {
          // Base64 encode the poster
          result.Poster = 'data:image/jpeg;base64,' + imdbData.toString('base64');
          // Set response header to 200 and content type to JSON
          res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8000' // This need fixing on localhost..
          });

          var end = new Date().getTime();
          // Set the time to ms execution time
          result.time = end - start;
          // End the request
          res.end(JSON.stringify(result));
        }
      });
    }
  });

}).listen(3020);
