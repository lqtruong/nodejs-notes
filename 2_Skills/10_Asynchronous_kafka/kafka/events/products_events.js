const { consumeAddProductToCart } = require('./consumer')

const checkProductAvailabilityEvent = async () => {
    await consumeAddProductToCart.run({
        eachMessage: async ({ topic, partition, messages }) => {
            console.log({
                value: messages.value.toString(),
            });
        },
    });

};

module.exports = {
    checkProductAvailabilityEvent
};

