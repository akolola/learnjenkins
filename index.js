var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello!");

});

var port = 80;

server.listen(port);

console.log("Server is gioning on http://localhost:%d", port);
