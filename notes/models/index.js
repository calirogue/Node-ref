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
//         name: 'LetterM',
//         title: 'Machine Learning',
//         secondTitle: 'Python | Node | Vue',
//         full: 'Knowing very little about technology and only used programs that was used for design on the computer. He went on the internet and searched for web development in 2011. After building his first website in basic javascript, html, and css. He barely scratched the serface but was intrgued on how philoshpy and programming are alike: arguments, objects, functions, etc. Defining how X function passes a number of Y objects to create some sort of value. He decided to tell people at college parties that he was a web developer. He would build small websites for college students to practice web development.',
//         descript: 'The story of guy who was not good at math so he taught himself math by using philosophy. Philosophy may seem useless to most people but some theres the fundamentals of programming and using math: create logical agruments to narrow down a task or objective to find a deeper meaning. However, programming took interest when this guy had a few good ideas in college. In order to do these ideas, he needed a website. At the time for a simple website cost over $2000. Since he taught himself math by using philosphy. He decided to do the same with programming.',
//         present: 'Years later in a far away location from where he started in NYC. He decided to change the course of his ship and go in a slightly more difficult route, Machine Learning. Knowing that most companies currently only take master or PHD. He decided to use machine learning and data science in his own personal projects and companies he consulted for. By using web development, he can create mobile applications to gather data and clean it from users interacting with different web and mobile applications. Attacking the same equation but with different tactics.',
//         tags: ['Backend', 'frontend']
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