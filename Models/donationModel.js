const mongoose = require("mongoose")

const Schema = mongoose.Schema

const donationSchema = new Schema({
    name: String,
    cat: String,
    file: String,
    text: String,
    phone: Number
})

// const fileSchema = new Schema({
//     path: { type: String, required: true },
//   });
  
// module.exports = mongoose.model('File', fileSchema);
  
//   module.exports = FileModel;

module.exports = mongoose.model("Donation", donationSchema)