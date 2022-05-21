const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        min: 2,
        max: 30
    },
    type: {
        type: String,
        enum: ['ADMIN','USANZWE'],
        default: 'USANZWE'
    },
    lname: {
        type: String,
        min: 2,
        max: 30
    },
    password: {
        type: String,
        min: 2,
        max: 30
    },
})
module.exports.usersSchema = mongoose.model("users", userSchema);