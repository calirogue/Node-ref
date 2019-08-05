// Connecting to mongoDB
// document is similar to rows
// Schema is used to define documents in a collection

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to mongo'))
    .catch(err => console.error('could not connect to mongodb', err));


// creating a Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
});

// Schema types:
// 1. String
// 2. Number
// 3. Date
// 4. Buffer
// 5. Boolean
// 6. ObjectID
// 7. Array


// Model 

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Vue course',
        author: 'Matt',
        tags: ['vue', 'frontend']
    });

    const result = await course.save();
    console.log(result);
}

createCourse();

async function getCourses() {
    // or
    // and
    
    const courses = await Course
        // .find({ author: 'Matt', isPublished: true })
        .find()
        .or([ { author: 'Matt' }, { name: 'vue '} ])
        .and([ ])
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1});
    console.log(courses);
}

getCourses();