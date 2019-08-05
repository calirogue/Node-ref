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
//         name: 'LetterL',
//         title: "Linux",
//         secondTitle: "Don't 'sudo rm -rf /'",
//         full: "This was a game changer since he knew a lot of the commands from using terminal on mac. It was pretty much the same on a linux machine. Since he used ubuntu for web development, debian wasn't too distant. Cleaned himself from mac and now purely on android and linux. Much of his fellow soldiers don't believe it can actually happen but if there's a will, there's a way.",
//         descript: "A short story about a guy who once only had apple devices. In this day and age he didn't think it was possible to completely remove apple from his life. He just didn't like buying a super expensive laptop that had half the power of a windows machine. After doing a little research and a deployment coming up. He decided to buy a pixelbook, where he installed linux onto it.",
//         tags: ['Debian', 'Linux']
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