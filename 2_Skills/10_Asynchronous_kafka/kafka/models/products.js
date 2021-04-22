const Mongoose = require('../db');

module.exports = new Mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
});