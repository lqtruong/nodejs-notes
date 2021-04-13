const fs = require('fs');
const cache = {};
function consistentReadAsync(filename, callback) {
    if (cache[filename]) {
        process.nextTick(() => callback(cache[filename]));
    } else {
        //asynchronous function
        fs.readFile(filename, 'utf8', (err, data) => {
            cache[filename] = data;
            callback(data);
        });
    }
}
console.log('using process.nextTick to defer the execution to async');
consistentReadAsync('input.txt', (data) => console.log('callback: ' + data));

function consistentReadAsync_1(filename, callback) {
    if (cache[filename]) {
        setImmediate(() => callback(cache[filename]))
    } else {
        //asynchronous function
        fs.readFile(filename, 'utf8', (err, data) => {
            cache[filename] = data;
            callback(data);
        });
    }
}
console.log('using setImmediate to defer the execution to async');
consistentReadAsync_1('input.txt', (data) => console.log('callback: ' + data));

