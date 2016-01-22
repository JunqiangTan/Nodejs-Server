var http = require('http');

http.createServer(function(require, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello, Nero.');
  response.end();
}).listen(8888);