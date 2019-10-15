const EventEmitter = require('events');

let url = 'http://mylogger.io/log';
// each class should be upper case

class Logger extends EventEmitter {
    log(message) {
        // send http request
        console.log(message);
        
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}
// Inside a class, remove function - now becomes a method


module.exports = Logger; 