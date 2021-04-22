const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/dindin', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        console.log(err);
        throw err;
    });

module.exports = mongoose