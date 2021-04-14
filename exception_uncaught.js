// import { readFile } from 'fs'; // for ES6 compatible, to run this, you should add "type": "module" to your package.json file
// if we use ES6 module compatible, the all `require('package')` declaration would not work anymore
const fs = require('fs');

process.on('uncaughtException', (err) => {
    console.error('This will catch at last the ' + 'JSON parsing exception: ' + err.message);
    // Terminates the application with 1 (error) as exit code:
    // without the following line, the application would continue
    process.exit(1);
});

function readAndProcessJsonFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(JSON.parse(data));
    });
};
readAndProcessJsonFile('json_valid.json');
readAndProcessJsonFile('json_invalid.json');
