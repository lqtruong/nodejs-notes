const Mongoose = require('../db');
const CartSchema = require('../models/carts');
const Carts = Mongoose.model('Cart', CartSchema);
const CartsEvents = require('../events/carts_events');

const getAllByUser = async (req, res) => {

    return Promise.resolve(
        Carts
            .find({ userId: { $eq: req.params.userId } })
            .sort({ 'modified': -1 })
    );
};

const addItem = async (req, res) => {
    // when adding an item to cart, produce an event to check the product availability
    // if the product quantity > the adding quantity, then add. Otherwise, error thrown
    CartsEvents.addProductToCartEvent(req.payload);
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