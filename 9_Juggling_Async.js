var http = require('http');
var concat = require('concat-stream');
var urls = new Array(3);
var gCount = 0;
var i = 0;

for(var i = 0; i < 3; i++) {
  ProcessData(i);
}

function ProcessData(urlIndex) {
  http.get(process.argv[2 + urlIndex], function(response) {
    response.pipe(concat(function (data) {
      urls[urlIndex] = data.toString();
      gCount++;
      if(gCount == 3) {
        URLResults();
      }
    }));
  });
}

function URLResults() {
  for(var i = 0; i < 3; i++) {
    console.log(urls[i]);
  }
}
