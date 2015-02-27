var http = require('http');
var through = require('through');

function write(buf) {
    this.queue(buf.toString().toUpperCase());
}

function handler(req, res) {
    if(req.method !== 'POST') {
        res.end('no data');
        return;
    }

    req.pipe(through(write)).pipe(res);
}

http.createServer(function(req, res) {
    if(req.method !== 'POST') {
        res.end('no data');
        return;
    }

    req.pipe(through(write)).pipe(res);
}).listen(process.argv[2]);
