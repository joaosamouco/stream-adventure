var socket = require('websocket-stream');

var stream = socket('ws://localhost:8000');
stream.pipe("hello\n");
stream.end();

stream.end("hello\n");
