
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const consumerSchema = new Schema({
    name: String,
    cat: String,
    LNumber: Number,
    file:{
        type: String,
        default: "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
    },
    email: String,
    password: String,
    phone: Number
})

module.exports = mongoose.model("Consumer", consumerSchema)