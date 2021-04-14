// import { readFile } from 'fs'; // for ES6 compatible, to run this, you should add "type": "module" to your package.json file
// if we use ES6 module compatible, the all `require('package')` declaration would not work anymore
const fs = require('fs');

function readJSONThrows(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        //no errors, propagate just the data
        callback(null, JSON.parse(data));
    });
};


readJSONThrows('json_invalid.json', err => console.log(err));

readJSONThrows('json_valid.json', (err, data) => console.log(data));

