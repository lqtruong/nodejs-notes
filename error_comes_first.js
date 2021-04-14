const fs = require('fs');

const handleError = (err) => console.log('err: ' + err);
const processData = (data) => console.log('data: ' + data);

fs.readFile('foo.txt', 'utf8', (err, data) => {
    if (err)
        handleError(err);
    else
        processData(data);
});