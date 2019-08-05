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
//         name: 'LetterA',
//         title: 'Alpha Team',
//         secondTitle: 'Chain of Command =',
//         full: 'The story about a guy who grew up in a town who disliked the military. It was not that they hated the military but people grew up fairly wealthy and the notion was that if you join the military then you are a low life. Well the guys inspireation was in fact military generals from different cultures and time periods. Later in life when the guy was in college, most of his business plans and models were references to military generals and war plans. He learned about supply chain management and logistics from reading a book called: War and Leadership. After graduating college and a some years later he joined the Army National Gaurd Infantry. This exact job translates to the business sector: supply, communication, chain of command, logistics, tactics, and strategy. However there is a slight twist to this guys story. He had the option on going officer but picked enlisted first. He knew he would be a better leader if he understood their pain and suffering first. Not this day but some day he will put his packet in to be an officer.',
//         descript: 'Two fire teams, three squares, three plattons, one troop, three troops, one squadron.',
//         present: 'Present day: this same guy is currently deployed in the Horn of Africa, Operation Enduring Freedom serving in 2-1 alpha, C 102nd troop in the infantry.',
//         tags: ['Military', 'Army']
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