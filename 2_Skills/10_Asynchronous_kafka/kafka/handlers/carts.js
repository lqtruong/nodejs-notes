const Mongoose = require('../db');
const CartSchema = require('../models/carts');
const Carts = Mongoose.model('Cart', CartSchema);

const getAllByUser = async (req, res) => {

    return Promise.resolve(
        Carts
            .find({ userId: { $eq: req.params.userId } })
            .sort({ 'modified': -1 })
    );
};

const addItem = async (req, res) => {
    return Promise.resolve(Carts.create(req.payload));
};

const deleteItem = async (req, res) => {
    return Promise.resolve(Carts.remove({ 'products._id': { $eq: req.params.productId } }));
};

module.exports = {
    getAllByUser,
    addItem,
    deleteItem
}