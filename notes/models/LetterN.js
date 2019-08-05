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
//         name: 'LetterN',
//         title: "Networking",
//         secondTitle: "Ths is sort of based off of a stratetic abstract from chaotic mathematics.",
//         full: "This story is more about a guy who looked at an abstract paiting and didn't see art but instead saw chaotic mathematics in the mix of paint and canvas. He wanted to base his life off of the patterns where X can is hard to define in its own destruction. Predictable in some cases but always having a deeper network of meanings behind every turn. Therefore nothing in reality could actually be boring.",
//         descript: "Networking can be from making a friend and leveraging they're skills. But this is not the equation that most people would probably assume.",
//         present: "Risky, unconvential, and unique lifestyle of combining different clusters in his networks that in some way all work together. At a distance none of them make sense but digging deeper someone can find the meaning behind each thought out strategic move.",
//         tags: ['Networking', 'Relationships']
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