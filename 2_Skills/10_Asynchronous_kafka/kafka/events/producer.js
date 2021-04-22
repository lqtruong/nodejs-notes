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


module.exports = initProducer()
    .then(producer => {
        console.log('Producer connected');
        return producer;
    })
    .catch(err => console.log(err));