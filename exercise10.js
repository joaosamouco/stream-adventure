var trumpet = require('trumpet');
var through = require('through');

var htmldata = process.stdin;

var tr = trumpet();

var loud = tr.select('.loud').createStream();

var stream = through(write);

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}

loud.pipe(stream).pipe(loud);
htmldata.pipe(tr).pipe(process.stdout);
