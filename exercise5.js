var split = require('split');
var through = require('through');
var line=0;

var input = process.stdin;
var output = process.stdout;

var stream = through(write, end);

input.pipe(split()).pipe(stream).pipe(output);

function write(buf) {
  (line++ % 2 === 0) ? this.queue(buf.toString().toLowerCase() + "\n") : this.queue(buf.toString().toUpperCase() + "\n");
}

function end() {
  this.queue(null);
}
