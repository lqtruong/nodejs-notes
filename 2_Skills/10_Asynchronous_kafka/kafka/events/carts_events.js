// const { producer } = require('./producer');

const { Kafka } = require('kafkajs')

const kafkaBootstrapServer = new Kafka({
    clientId: 'b2c',
    brokers: ['localhost:9092']
})

const initProducer = async () => {
    const producer = kafkaBootstrapServer.producer();
    await producer.connect();
    return producer;
}


const addProductToCartEvent = async (product) => {
    // console.log(product);
    initProducer()
        .then(producer => {
            console.log('Producer connected');
            if (product) {
                producer.send({
                    topic: 'b2c.tpc.carts.additem',
                    messages: [
                        {
                            value: JSON.stringify(product)
                        }
                    ],
                });
            }
        })
        .catch(err => console.log(err));
};

addProductToCartEvent();

module.exports = {
    addProductToCartEvent
};

