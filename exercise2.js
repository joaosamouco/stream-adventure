var fs = require('fs');
var file = process.argv[2];

var stream = fs.createReadStream(file);

stream.pipe(process.stdout);
