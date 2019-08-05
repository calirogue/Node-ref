const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
});

// const user = new User({
//     name: "Alexa",
//     email: "test1@test.com",
//     password: "test12345"
// });

// (async () => {
//     try {
//         const doc = await user.save();
//         console.log("saved user");
//     } catch (err) {
//         console.log(err);
//     }
// })();

module.exports = mongoose.model("User", UserSchema);