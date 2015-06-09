var http = require('http');
//var fs = require('fs');
var map = require('through2-map')

//.toUpperCase();
var server = http.createServer(function (req, res) {
  //fs.createReadStream(process.argv[3]).pipe(res).toUpperCase();
  var upper = map(function (req) {

  });
});

server.listen(Number(process.argv[2]));
