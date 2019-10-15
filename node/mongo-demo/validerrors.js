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
        max: 200
    }
});

const Course = mongoose.model('Course', courseSchema);

// Create course
async function createCourse() {
    const course = new Course({
        name: 'Node course',
        category: '-',
        author: 'Mark',
        tags: null,
        isPublished: true,
        price: 12
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
    const courses = await Course
        .find({ author: 'Matt', isPublished: true })
        .sort({ name: 1 })
    console.log(courses);
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
