var request = require('request');

var data = process.stdin;
var response = process.stdout;


var stream = request.post('http://localhost:8000');

data.pipe(stream).pipe(response);
