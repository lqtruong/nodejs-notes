const ReplaceStream = require('./stream_transform.js');
process.stdin
    .pipe(new ReplaceStream(process.argv[2], process.argv[3]))
    .pipe(new ReplaceStream('hel', 'second_stream'))
    .pipe(process.stdout)
    .on('error', err => console.log(err));

// node .\stream_join.js World Node.js
// hello World!