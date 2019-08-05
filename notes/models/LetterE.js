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

// const About = mongoose.model('About', aboutSchema);

// async function createAbout() {
//     const about = new About({
//         name: 'LetterE',
//         title: "Enviroment",
//         secondTitle: "Busness Env. | Tech Env. | Military Env. = Nature Env.",
//         full: "This isn't about saving the world or anything along those lines. It's about a guy who went from one toxic environment to another. His escape was nature itself. After taking a class in college about sustainability in economics. His views on life in general changed. His previous thought was, 'if it didn't save or make money, didn't want it'. But this class gave a different perspective on how the world works against or arround the environment we live in. The space we create and how sometimes we destroy something beautiful for something toxic. It was sort of out of the black metal second age philosphpy, 'Inner Darkness'. Where in black metal musicians sang about everyone's inner darkness, 'they want to save the planet yet buy products that destroy the planet they live on'.",
//         descript: "What do they all have in common? Well here's a tale about a guy who experienced an array of different enviroments and usually all circling around one, nature.",
//         present: "Going from learning business to tech then the military that helps understand both business and technology. This guy became very good at adapting to different environments depending on the situation. Going from living very peaceful to extremely stressful. His only escape was exploring the world we live in and looking at a different perspective in life. That's one of the reasons why he re-enlisted for the combat deployment. He wanted to be in a different environment that would challenge his mind.",
//         tags: ['Business', 'Nature', 'Military', 'Tech']
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