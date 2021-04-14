const fs = require('fs');
function readJSON(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        let parsed;
        if (err) // error for reading file
            //propagate the error and exit the current function
            return callback(err);
        try {
            //parse the file contents
            parsed = JSON.parse(data); // error for reading contents of file as JSON
        } catch (err) {
            //catch parsing errors
            return callback(err);
        }
        //no errors, propagate just the data
        callback(null, parsed);
    });
};

readJSON('json_invalid.json', (err, data) => {
    if (err) console.log(err)
    else console.log(data)
}); // error

readJSON('json_valid.json', (err, data) => {
    if (err) console.log(err)
    else console.log(data)
});