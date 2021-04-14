const fs = require('fs');
const zlib = require('zlib');

console.time("load_big_file");
const file = process.argv[2];
fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(file + '.gz'))
    .on('finish', () => {
        console.log('File successfully compressed');
        console.timeEnd("load_big_file");
    });


// node .\gzip_streaming.js .\foo.txt
