var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    var filePath = path.join(__dirname, 'demo_file.html');

    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(5000);
