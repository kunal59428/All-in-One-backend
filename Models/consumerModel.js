
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const consumerSchema = new Schema({
    name: String,
    cat: String,
    LNumber: Number,
    file: String,
    email: String,
    password: String,
    phone: Number
})

module.exports = mongoose.model("Consumer", consumerSchema)