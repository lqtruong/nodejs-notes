const { producer } = require('./producer');

const addProductToCartEvent = async (product) => {
    console.log(product);
    await producer.send({
        topic: 'b2c.tpc.carts.additem',
        messages: [
            { value: product },
        ],
    });
};

module.exports = {
    addProductToCartEvent
};

