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
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        // uppercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                // Do some async work
                const result = v && v.length > 0;
                callback(result);
                }, 2000);
            },
            message: 'A course should have at least one tag'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        require: function() { return this.isPublished; },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

const Course = mongoose.model('Course', courseSchema);

// Create course
async function createCourse() {
    const course = new Course({
        name: 'Node course',
        category: 'Web',
        author: 'Mark',
        tags: ['frontend'],
        isPublished: true,
        price: 15.8
    });

    try {
        const result = await course.save();
        console.log(result);
    }
    catch (ex) {
        for (field in ex.errors)
        console.log(ex.errors[field].message);
    }

}

createCourse();

// Get Course

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({ _id: '5d29ca0f88d8491912a5c467' })
        .sort({ name: 1 })
        .select({ name: 1, tags: 1, price: 1 })
    console.log(courses[0].price);
}

getCourses();

// // Update
// async function updateCourse(id) {

//     const course = await Course.findById(id);
//     if (!course) return;
//     course.tags = 'abstract design';
//     course.author = 'Mark';
//     const result = await course.save();
//     console.log(result);
// }

// updateCourse('5d2875f483f3640ceb4f8ffa');

// // Remove

// async function removeCourse(id) {
//     // const result = await Course.deleteMany({ _id: id });
//     const course = await Course.findByIdAndRemove(id);
//     console.log(course);

// }

// removeCourse();
