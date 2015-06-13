var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  if(req.method == 'GET') {
    var reqURL = url.parse(req.url, true);
    //console.log(reqURL);
    var date = new Date(reqURL.query.iso);
    //console.log(date);
    var answer;

    if(reqURL.pathname == '/api/parsetime') {
      answer = {hour: date.getHours(),
               minute: date.getMinutes(),
               second: date.getSeconds()};
    }
    else if (reqURL.pathname == '/api/unixtime') {
      answer = { unixtime: date.getTime() }
    }
  res.writeHead(200, { 'Content-Type':'application/json'});
  res.end(JSON.stringify(answer));
  }
});

server.listen(Number(process.argv[2]));
