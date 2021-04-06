var events = require('events');
var eventEmitter = new events.EventEmitter();

// async function/OR callback function
var connectHandler = function connected() {
    console.log('connect succesfully.');
    eventEmitter.emit('data_received');
}

var resultHandler = function handle_result() {
    console.log('data received succesfully.');
}

// Event handling
eventEmitter.on('request_connnect', connectHandler); // with event connection, handle connect
eventEmitter.on('data_received', resultHandler); // handle connect will produce data_received event

eventEmitter.emit('request_connnect');

console.log("Program Ended.");