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
//     firstjob: {
//         type: String
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
//         name: 'LetterB',
//         title: 'Business',
//         secondTitle: 'Strategic | Design | Tactics',
//         full: "After he tought himself web development. He used web development as a tool to obtain small partnerships in small projects. He was constantly getting freelance jobs while building business and development practices.",
//         descript: "There was a guy that constantly failed at everything. Anything he did he just wasn't good at. But he didn't give up. Right before highschool ended he got into Parsons the New School of Design for Fine Art. After a few months he knew he was good at art but wanted to do design and business. So he transfered majors to Strategic Design and Management. It was a combo of both design and business.",
//         present: "Years later and experiencing different types of leaders, design thinking, doing trade offs in technology, he became the Director of Business Development and Technology for a farm in Oregon. He used his past experience to create ",
//         firstjob: "The first job he got after college was pure web development in a start up in midtown NYC. Even though it wasn't business related, he learned what a toxic enviroment / bad leadership looks like. It wasn't his CTO but his CEO that caused such a toxic environment.",
//         tags: ['Tactics', 'Strategy', 'Design Thinking']
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