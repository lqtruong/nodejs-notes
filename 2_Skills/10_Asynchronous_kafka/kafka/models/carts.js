const Mongoose = require('../db');

const ProductSchema = new Mongoose.Schema({
    quantity: Number
});

module.exports = new Mongoose.Schema({
    userId: Mongoose.Types.ObjectId,
    products: [ProductSchema],
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
});