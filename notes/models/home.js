// // Connecting to mongoDB
// // document is similar to rows
// // Schema is used to define documents in a collection

// const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/portfolio')
//     .then(() => console.log('connected to mongo'))
//     .catch(err => console.error('could not connect to mongodb', err));


// // creating a Schema
// const homeSchema = new mongoose.Schema({
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
//     subheader: {
//         type: String,
//         required: true
//     },
//     descript: {
//         type: String,
//         required: true
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

// const Home = mongoose.model('Home', homeSchema);

// async function createHome() {
//     const home = new Home({
//         name: 'MainDots',
//         title: "First it starts with an idea",
//         subheader: "Who is this guy?",
//         descript: "Anyone can program their site that shows off their projects and show off who they are. But do these portfolio websites really tell anyone who they really are? People who know me know I'm very abstract and outside the box. Attack the same equation but at a different and more strategic view point.",
//         full: "This portfolio is more of a story, rather than showing off who I am and what I do. If that's what you seek then I'll save you the time here right now. I'm an innovator that uses technology as a tool in business practices by using design thinking.",
//         tags: ['Communication', 'TDD']
//     });

//     const result = await home.save();
//     console.log(result);
// }

// createHome();

// async function getHomes() {
//     const homes = await Home
//         .find({ author: 'Matt', isPublished: true })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1});
//     console.log(homes);
// }

// getHomes();