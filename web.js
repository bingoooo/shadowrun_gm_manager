// Main server file

var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"test/plain"});
    response.end('Hello World\n');
}).listen(process.env.PORT || 5000, "127.0.0.1");