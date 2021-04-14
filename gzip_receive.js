const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const server = http.createServer((req, res) => {
    const filename = req.headers.filename;
    console.log('File request received: ' + filename);
    const filename_saved = 'received_' + filename;
    req
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(filename_saved))
        .on('finish', () => {
            res.writeHead(201, { 'Content-Type': 'text/plain' });
            res.end('That\'s it\n');
            console.log(`File saved: ${filename_saved}`);
        });
});
server.listen(3000, () => console.log('Listening'));