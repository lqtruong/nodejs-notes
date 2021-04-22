const { Kafka } = require('kafkajs');

const startKakfaApp = async () => {

    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9092']
    })

    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello ddd ddfd!' },
        ],
    })

    await producer.disconnect();
};

startKakfaApp();