const Mongoose = require('../db');
const ProductSchema = require('../models/products');
const Products = Mongoose.model('Product', ProductSchema);

const Configs = require('../config.json');

const getAll = async (req, res) => {
    let size = req.query.size;
    let page = Math.max(0, req.query.page);
    let skip = page * size;
    console.log(skip);
    console.log(size);
    return Promise.resolve(
        Products
            .find({})
            .skip(2)
            .limit(2)
            .sort({ 'modified': -1 })
    );
};

const getById = async (req, res) => {
    let id = req.params.id;
    return Promise.resolve(Products.find({ _id: { $eq: id } }).sort({ modified: -1 }));
};

const addProduct = async (req, res) => {
    console.log(req.payload);
    return Promise.resolve(Products.create(req.payload));
};

const deleteById = async (req, res) => {
    let id = req.params.id;
    return Promise.resolve(Products.findByIdAndRemove(id));
};

module.exports = {
    getAll,
    getById,
    addProduct,
    deleteById
};