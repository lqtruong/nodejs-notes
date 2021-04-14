const EventEmitter = require('events').EventEmitter;
class SyncEmit extends EventEmitter {
    constructor() {
        super();
        this.emit('ready'); // the event was emitted before the listener is registered (line 8)
    }
}
const syncEmit = new SyncEmit();
syncEmit.on('ready', () => console.log('Object is ready to be used'));

// to make the sync event, we register the listener for the event before emitting it
// syncEmit.emit('ready');

