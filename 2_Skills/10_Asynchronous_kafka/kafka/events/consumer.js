const { Kafka } = require('kafkajs')

const kafkaBootstrapServer = new Kafka({
    clientId: 'b2c',
    brokers: ['localhost:9092']
})

const initConsumer = async (options) => {
    const consumer = kafkaBootstrapServer.consumer({ groupId: options.groupId })
    await consumer.connect();
    return consumer;
}

const consumeAddProductToCart = async () => {
    await initConsumer({ groupId: 'b2c.grp.carts.additem' })
        .then((consumer) => {
            consumer.subscribe({ topic: 'b2c.tpc.carts.additem', fromBeginning: true });
            console.log('Register consumeAddProductToCart');
            return consumer;
        })
        .catch(err => console.log(err));
};

module.exports = {
    consumeAddProductToCart
}