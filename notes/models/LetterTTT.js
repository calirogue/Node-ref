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
//         name: 'LetterTTT',
//         title: "Tactics",
//         secondTitle: "Test Driven Development is the old world. Weclome to the new world of 'Tactics'",
//         full: "One can say it's still TDD but another could say its understanding the business objective fully in order to create a better program in itself. Test driven development starts before actually building out the program. Learning the business objective and strategic viewpoint before can not only decrease development time but also create a better and stronger product overall. Sometimes including this guy would even admit that they get lost in the technologies that they know and advise to use such technologies regardless. Why do something new if it will work anyway?. But this guy took a step back once at a project and reaized that angular would be a better fit for this type of technology he was consulting for. He was just a junior programmer at the time but since he learned what the program would actually do. He advised his managers to rethink the tech stack. After consulting with the client they didn't change. Months went by and the client realized that angular would have been the better choice.",
//         descript: "The story of a guy using old world development to further his career by using a different tactic that would help him understand every direction in the business world in relation to technology.",
//         present: "Sometimes this situation happens because programmers are terrified on challenging themselves or want to fall back into the old ways. Something they're used to and or less riskier. They know it works, therefore why change? But sometimes a little research in the actual end functionlity can change the course of the entire project.",
//         tags: ['Communication', 'TDD']
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