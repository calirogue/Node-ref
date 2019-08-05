// // Connecting to mongoDB
// // document is similar to rows
// // Schema is used to define documents in a collection

// const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/portfolio')
//     .then(() => console.log('connected to mongo'))
//     .catch(err => console.error('could not connect to mongodb', err));


// // creating a Schema
// const aboutSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     title: {
//         type: String,
//         required: true,
//         maxlength: 50
//     }, 
//     full: {
//         type: String,
//         required: true,
//         minlength: 20
//     },
//     secondTitle: {
//         type: String,
//         required: true
//     },
//     descript: {
//         type: String,
//         required: true
//     },
//     present: {
//         type: String,
//     },
//     tags: {
//         type: Array,
//         validate: {
//             isAsync: true,
//             validator: function(v, callback) {
//                 const result = v && v.length > 0;
//                 callback(result);
//             },
//             message: 'A ref should have at least one tag'
//         }
//     },
//     date: { type: Date, default: Date.now },
//     isPublished: Boolean
// });


// // Model 

// const About = mongoose.model('About', aboutSchema);

// async function createAbout() {
//     const about = new About({
//         name: 'LetterT',
//         title: 'Triathlons',
//         secondTitle: 'Swim 2.4 Miles | Bike 110 Miles | Run 26.2 Miles',
//         full: 'Story about the journey of a guy becoming a triathlete. Funny how life works. This guy went from smoking cigarettes and drinking to ultra cycling and marathons. Got bored of both and went onto Ironman training. The story does not end after the Ironman triathlon. After he joined the Army National Guard and during bootcamp he got injured with a stress fracture. Even though he was in top shape. His body was not used to the weight that he was required to carry. But knowing how to workout and dealing with past injuries. He took his free time to get stronger in other areas where he was weaker in. After completing basic and infantry school at Fort Benning. He started a new workout plan that would not only be based around endurance training but also working with weights. Hike + heavy backpack or running with a plate carrier.',
//         descript: 'Present day: the same guy keeps a work out routine during deployment but everyday is something different. Shocks the body but also makes the work outs challenging and nothing is ever on repeat.',
//         tags: ['Swim', 'Bike', 'Run']
//     });

//     const result = await about.save();
//     console.log(result);
// }

// createAbout();

// async function getAbouts() {
//     const abouts = await About
//         .find({ author: 'Matt', isPublished: true })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1});
//     console.log(about);
// }

// getAbouts();