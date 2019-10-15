const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const helmet = require('helmet');
const morgan = require('morgan');
const http = require('http');
const logger = require('./middleware/logger');
const express = require('express');
const app = express();
const courses  = require('./routes/courses');
const mainDots = require('./routes/mainDots');
const home  = require('./routes/home');
const mongoose = require('mongoose');
require('dotenv').config()

// router
app.use('/api/courses', courses);
app.use('/api/mainDots', mainDots);
app.use('/', home);

// template engine
app.set('view engine', 'pug');
app.set('views', './views'); // default

// adding middleware
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true})); // key=value&key=value
app.use(express.static('public'));
app.use(helmet());

// Configuration
console.log('App name: ' + config.get('name'));
console.log('mail name: ' + config.get('mail.host'));
// console.log('mail pass: ' + config.get('mail.password'));

// function on how to tell what environment you are
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled');
}
// DB
// mongoose.connect('mongodb://localhost/playground')
//     .then(() => console.log('connected to mongo'))
//     .catch(err => console.error('could not connect to mongodb', err));


const result = await course.save();
console.log(result);
// Db work
dbDebugger('conected to the database');

app.use(logger);

// PORT
var port = process.env.PORT;
app.set('port', port);
var server = http.createServer(app);
app.listen(port, () => console.log(`Listening on port ${port}...`));