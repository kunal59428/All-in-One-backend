const express = require("express")
const router = require("./Router/donarRoute")
const cors = require("cors")
const consumerRouter = require("./Router/consumerRoute")
const colors = require("colors")
const connectToDb = require("./DB/connection")
const donationRoute = require("./Router/donationRoute")
require("dotenv").config()
const FileModel = require('./FileModel');


const server = express()
const PORT = process.env.PORT

server.use(express.json())   // for the use of body parser


server.use(cors())

server.get("/home", (req, res) =>{
    res.send({msg:'home'})
})

server.use("/api", router)
server.use("/consumer", consumerRouter)
server.use("/item", donationRoute)

const startConnection = async() =>{
    try {
        await connectToDb()
        server.listen(PORT, () =>{
            console.log(`Server is running on  PORT: ${PORT}`.underline.yellow)
        })
    } catch (error) {
        console.log(error)
    }

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/'); // store files in the 'uploads' folder
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   });
  
//   const upload = multer({ storage });
  
//   app.post('/api/upload', upload.single('file'), (req, res) => {
//     // Save file information to MongoDB
//     const filePath = req.file.path;
//     const fileModel = new FileModel({ path: filePath });
//     fileModel.save((err, doc) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       res.status(200).json({ fileId: doc._id });
//     });
//   });
}

startConnection()
