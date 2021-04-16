const Sqlite3 = require('sqlite3');
const db = new Sqlite3.Database('dindin.sqlite');

module.exports = db;