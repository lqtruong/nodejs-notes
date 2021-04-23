const { Products } = require('../handlers');
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

const checkProductAvailabilityEvent = async () => {
    await initConsumer({ groupId: 'b2c.grp.carts.additem' })
        .then((consumer) => {
            consumer.subscribe({ topic: 'b2c.tpc.carts.additem', fromBeginning: true });
            consumer.run({
                eachMessage: async ({ topic, partition, message }) => {
                    console.log('received');
                    let data = JSON.parse(message.value.toString());
                    console.log(data);
                    let products = data.products;
                    if (products) {
                        products.forEach(prod => {
                            // check id & update quantity
                            Products.buyProduct(prod._id, prod.quantity)
                                .then(updatedProduct => sendBackProductAvailability(updatedProduct))
                                .catch(err => console.log(err));
                        });
                    }

                },
                autoCommitInterval: 200
            });
        })
        .catch(err => console.log(err));
};

const sendBackProductAvailability = async (product) => {
    const producer = kafkaBootstrapServer.producer();
    await producer.connect();
    producer.send({
        topic: 'b2c.tpc.carts.additem.availability',
        messages: [
            {
                value: JSON.stringify(product)
            }
        ],
    });

};

checkProductAvailabilityEvent();

module.exports = {
    checkProductAvailabilityEvent
};


