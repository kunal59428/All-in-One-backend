const mongoose = require("mongoose")

const Schema = mongoose.Schema

const donationSchema = new Schema({
    name: String,
    cat: String,
    file: String,
    text: String,
    phone: Number
})

module.exports = mongoose.model("Donation", donationSchema)