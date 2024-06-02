const mongoose = require("mongoose")

const Schema = mongoose.Schema

const donationSchema = new Schema({
    name: { type: String, required: true },
    cat: { type: String, required: true },
    text: { type: String, required: true },
    phone:{ type: Number, required: true },
    profile: {
        type: String,
        default: "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
    }
})

// const fileSchema = new Schema({
//     path: { type: String, required: true },
//   });
  
// module.exports = mongoose.model('File', fileSchema);
  
//   module.exports = FileModel;

module.exports = mongoose.model("Donation", donationSchema)