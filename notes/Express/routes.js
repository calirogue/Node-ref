const express = require('express');
const app = express();

// define a route
app.get('/', (req, res) => {
    res.send('Good day, world');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// /api/courses/1

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// no if blocks. define route blocks with app.get