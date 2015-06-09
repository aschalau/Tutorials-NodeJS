var net = require('net');
var server = net.createServer(function (socket) {
  socket.end(GetDate() + '\n');
});

server.listen(Number(process.argv[2]));
//console.log(server.listen(Number(process.argv[2])));

function GetDate() {
var date = new Date();
return df = date.getFullYear() + '-'
          + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
          + ('0' + date.getDate()).slice(-2) + ' '
          + ('0' + date.getHours()).slice(-2) + ':'
          + ('0' + date.getMinutes()).slice(-2);
}
