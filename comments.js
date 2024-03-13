// Create web server
// Path: server.js
// Create a web server and use the comments module
var http = require('http');
var comments = require('./comments');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(comments.getComments());
    res.end();
}).listen(8080);
console.log('Server running at http://'); // Fix: Added closing quotation mark
