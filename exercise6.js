var concat = require('concat-stream');

var text = process.stdin;
var write = process.stdout;

text.pipe(concat(function(buf) {
        var line = buf.toString().split('').reverse().join('') + '\n';
        process.stdout.write(line);
    }));

var reversed = concat(function(buf) {
  var line = buf.toString().split('').reverse().join('');
  write.write(line);
});
