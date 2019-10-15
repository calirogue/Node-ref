const Joi = require('joi');
const express = require('express');
const app = express();

// adding middleware
app.use(express.json()); // req.body
// request processing pipeline
// Request -> 1. json() -> 2. route() -> Response
// advanced express - middleware functions

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
    if (!course) return res.status(404).send('The course was not found'); // 404
    res.send(course);
});

// post
app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


// update
app.put('/api/courses/:id', (req, res) => {
    // look up the course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course was not found'); 


    // validate
    // if invalid, return 404 - bad request
    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);


    // update course
    course.name = req.body.name;
    // return the updated course
    res.send(course);

});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
};


// delete
app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course was not found'); // 404

    // Delete - splice
    const index = courses.indexOf(course);
    courses.splice(index, 1)

    // Return the same course
    res.send(course);
    //
    //
});



// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// no if blocks. define route blocks with app.get