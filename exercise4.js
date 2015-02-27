var through = require('through');

var data_stdin = process.stdin;
var data_stdout = process.stdout;

var stream = through(write, end);

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}

function end() {
  this.queue(null);
}

data_stdin.pipe(stream).pipe(data_stdout);
