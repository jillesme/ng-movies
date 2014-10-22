var http = require('http');
var request = require('request').defaults({ encoding: null });

var headers = {
  'Referer': null,
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
};

var result;


function error (response) {
  response.writeHead(501, {
  'Access-Control-Allow-Origin': 'http://localhost:8000' // This need fixing on localhost..
  });
  response.end();
  timer = null;
  return;
}

function render (response, data) {
  response.writeHead(200, {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:8000' // This need fixing on localhost..
  });
  response.end(JSON.stringify(data));
  return;
}

var timer;

http.createServer(function (req, res) {
  var API = 'http://www.omdbapi.com';
  var url = API + req.url + '&plot=full';
  timer = setTimeout(function () {
    error(res);
  }, 10000);
  var start = new Date().getTime();

  // Get the omdb data
  request.get({ url: url }, function (err, omdbResponse, omdbData) {

    if (!err && omdbResponse.statusCode === 200) {
      // Assign the result to the omdb api data
      result = JSON.parse(omdbData.toString());

      if (result.Poster === 'N/A') { 
        var placeholder = 'data:image/png;base64,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';
        result.Poster = placeholder;
          var end = new Date().getTime();
          
          result.time = end - start;
        render(res, result)
      }
      // Make another request, to the imdb image
      request.get({ url: result.Poster, headers: headers }, function (err, imdbResponse, imdbData) {

        if (!err && imdbResponse.statusCode === 200) {
          // Base64 encode the poster
          result.Poster = 'data:image/jpeg;base64,' + imdbData.toString('base64');
          // Set response header to 200 and content type to JSON

          var end = new Date().getTime();
          // Set the time to ms execution time
          result.time = end - start;
          // End the request
          render(res, result);
        }
      });
    }
  });

}).listen(3020);
