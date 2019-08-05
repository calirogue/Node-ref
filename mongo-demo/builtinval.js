// build-in validators mongoose

// Validators

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to mongo'))
    .catch(err => console.error('could not connect to mongodb', err));


// creating a Schema
const courseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 200,
        // match: /pattern/
        },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        require: function() { return this.isPublished; },
        min: 10,
        max: 200
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Vue course',
        category: 'mobile',
        author: 'Mark',
        tags: ['backend', 'frontend'],
        isPublished: true,
        price: 12
    });

    try {
        const result = await course.save();
        console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }

}

createCourse();

async function getCourses() {
    const courses = await Course
        .find({ author: 'Matt', isPublished: true })
        .sort({ name: 1 })
    console.log(courses);
}

getCourses();


async function removeCourse(id) {
    // const result = await Course.deleteMany({ _id: id });
    const course = await Course.findByIdAndRemove(id);
    console.log(course);

}

createCourse();
