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
//         name: 'LetterLL',
//         title: "Leadership",
//         secondTitle: "Business | Technology | Military",
//         full: "This one guy experienced a number of leaders. From being in business to technology. The military was a little different but a bad leader is a bad leader across all sectors. But the military plays a very strategic perspective and viewpoint in business. If a leader has to do the work of the grunt then they aren't actually leading. (In translation) If a technical manager actually has to code than they aren't actually managing. There's a few exceptions to this though. If there's a weak soldier or programming. The leader has to show how to learn and fix the mistake.",
//         descript: "According to the military, anyone can be a leader. Most people want to for the wrong reasons: higher pay, doing less bs, avoid higher or other same rank. It's a flaw that the military has. Anyone with a degree can be an officer, while anyone with enough points in the army can be a non-commissioned officer regardless if they are actually good at leading or not. In fact most people get out of the military because of poor leadership. Ironic if you think about it.",
//         present: "After looking at the business and military world. This guy took what he learned mainly from the military and applied it to his civilian job. Communication, chain of command, logistics, supply, and tactics all make up the fundamentals of either being part of a business or owning one. The only real difference is that in the infantry the cost is death and in civilian for the most part is the loss of money.",
//         tags: ['Business', 'Technology']
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