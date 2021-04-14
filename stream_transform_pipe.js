const ReplaceStream = require('./stream_transform.js');
process.stdin
    .pipe(new ReplaceStream(process.argv[2], process.argv[3]))
    .pipe(process.stdout);

// node .\stream_transform_pipe.js World Node.js
// hello World!