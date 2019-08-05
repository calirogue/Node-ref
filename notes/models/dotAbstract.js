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
//         name: 'dotAbstract',
//         title: "Second",
//         subheader: "Take a look at this paint",
//         descript: "What do you see? How do you feel? What is the artist trying to say? What are the colors? Texture? Contrast? Size? Lines? Messy? Exact? Structured?",
//         full: "Think abstract, deep, look for symbols, look for signs, strategic, unconvential.",
//         tags: ['Dot', 'Abstract']
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