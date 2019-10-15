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

// async function createCourse() {
//     const course = new Course({
//         name: 'Vue course',
//         author: 'Matt',
//         tags: ['vue', 'frontend']
//     });

//     const result = await course.save();
//     console.log(result);
// }

// createCourse();

async function getCourses() {
    const courses = await Course
        .find({ author: 'Matt', isPublished: true })
        .sort({ name: 1 })
        .count();
    console.log(courses);
}

getCourses();


async function removeCourse(id) {
    // const result = await Course.deleteMany({ _id: id });
    const course = await Course.findByIdAndRemove(id);
    console.log(course);

}

removeCourse('5d2875f483f3640ceb4f8ffa');

