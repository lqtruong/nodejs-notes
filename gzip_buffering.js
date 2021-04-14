const fs = require('fs');
const zlib = require('zlib');

console.time("load_big_file");
const file = process.argv[2];
fs.readFile(file, (err, buffer) => {
    zlib.gzip(buffer, (err, buffer) => {
        fs.writeFile(file + '.gz', buffer, err => {
            console.log('File successfully compressed');
            console.timeEnd("load_big_file");
        });
    });
});

// node .\gzip_buffering.js foo.txt