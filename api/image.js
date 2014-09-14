var http = require('http');
var request = require('request').defaults({ encoding: null });
var url = require('url');

var h = {
  'Referer': null,
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
};

function error (response) {
  response.writeHead(404);
  response.end();
  return;
}

http.createServer(function (req, res) {
    var img = url.parse(req.url, true).query.img;

    if (!img || img === "N/A") {
      error(res);
      return;
    }

    request.get({ url: img, headers: h }, function (err, response, body) {

      if (response === undefined || response.statusCode !== 200) {
        error(res);
        return;
      } else {
        var i = new Buffer(body);
        res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Access-Control-Allow-Origin': 'http://localhost:8000' // This need fixing on localhost..
        });
        res.end('data:image/jpeg;base64,' + body.toString('base64'));
      }
    });

}).listen(3020);
