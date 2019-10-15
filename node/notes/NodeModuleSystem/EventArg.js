const EventEmitter = require('events');
// EventEmitter is a class, container
const emitter = new EventEmitter();
// Class: human | Object: John

// Register a listener
// emitter.on('messageLogged', (arg) => { // e, eventArg // arrow function
//     console.log('Listener Called', arg);
// });

// Raised an event. 
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Emit - making a noise, produce - signalling 

// Raise: logging (data: messages)

emitter.on('dataMessage', (arg) => {
    console.log('Data Message', arg);
});

emitter.emit('dataMessage', { id: 1, url: 'http://' });