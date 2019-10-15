const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const http = require('http');
const logger = require('./logger');
const auth = require('./auth')
const express = require('express');
const app = express();
const courses  = require('./routes/courses');
const home  = require('./routes/home');
require('dotenv').config()

// router
app.use('/api/courses', courses);

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

// help load http request - a logger
// function on how to tell what environment you are
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled');
}

// Db work
dbDebugger('conected to the database');

app.use(logger);
app.use(auth);

// define a route
app.get('/', (req, res) => {
    res.render('index', { title: 'my express', message: 'Hello'})
});

// PORT
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// listening to the port
var port = process.env.PORT;
app.set('port', port);
var server = http.createServer(app);
app.listen(port, () => console.log(`Listening on port ${port}...`));