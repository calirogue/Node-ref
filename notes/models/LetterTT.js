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
//         name: 'LetterTT',
//         title: 'Travel',
//         secondTitle: 'A journey is what this one guy is lives for.',
//         full: "His reasoning is that he wants to learn what other cultures do. He can simply read a book about the country. But he would rather skip the tourist hotspots and experience different lands in a different perspective. Though you can say it's super risky but that's what this guy lives on. The thrill of analysising how people in other cultures go through life.",
//         descript: "This guy takes a rather unconvential method of traveling. He takes a map of Europe and throws a dart at the map. Having to do little research as possible. He books the plane ticket to the largest city and flies over. Only brings a backpack with a couple days of clothing. Each experience is different and nothng is ever the same. He blends and adapts to his surroundings. Everything is trial and error at this point.",
//         tags: ['Italy', 'Germany', 'Poland', 'Spain', 'Ireland', 'UK', 'France']
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