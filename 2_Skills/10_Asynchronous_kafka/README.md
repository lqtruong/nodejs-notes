# Asynchronous integration via Kafka

- The fundamentals of a messaging system
- The `publish/subscribe` pattern
- Pipelines and task distribution patterns
- `Request/reply` patterns

Message types
- Command Message
- Event Message
- Document Message

`Peer-to-peer` vs `Message broker`
![message broker](message_broker.png)

**Websockets**
- Node.js websocket library used `ws`. See the application [socket nodejs](socket/README.md)
- `Peer-to-peer` for `publish/subscribe` using [`ZeroMQ`](https://zeromq.org/) (aka. `ØMQ`)

**Message Brokers**
- Rabbit MQ
- Apache Kafka

# Node.js + Kafka

Libs & plugins used
- [KafkaJS](https://kafka.js.org/docs/getting-started) client
- Hapi
- Apache Kafka & Zookeeper server
- Node.js backend

See more at [kafka nodejs](kafka/README.md)