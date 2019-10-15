// https://nodejs.org/dist/latest-v10.x/docs/api/events.html
//  Events - signal that something has happened
// HTTP - web server: listen on a port. 
//  - Event: new request
//  - Return a respond to those events

const EventEmitter = require('events');
// EventEmitter is a class, container
const emitter = new EventEmitter();
// Class: human | Object: John

// Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener Called');
});

// Raised an event. 
emitter.emit('messageLogged');

// Emit - making a noise, produce - signalling 