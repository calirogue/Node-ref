const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'troll: 1'},
    { id: 2, name: 'troll: 2'},
    { id: 3, name: 'troll: 3'},
    { id: 4, name: 'troll: 4'},
];
// define a route
app.get('/', (req, res) => {
    res.send('Good day, world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// /api/courses/1

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course was not found'); // 404
    res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// no if blocks. define route blocks with app.get