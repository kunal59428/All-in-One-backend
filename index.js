const express = require("express")
const router = require("./Router/donarRoute")
const cors = require("cors")
const consumerRouter = require("./Router/consumerRoute")
const colors = require("colors")
const connectToDb = require("./DB/connection")
const donationRoute = require("./Router/donationRoute")
const stripe = require("stripe")("sk_test_51PNIw3IW4TOd5CqDqwYWwplzDV6TvsUbNUdQ32Ci9xLnbD3vfrr4puUzs7nfBL83uBJH1ywKf8c6zkPUczhn423l00RlgffGEL")
require("dotenv").config()
// const FileModel = require('./FileModel');


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

server.post("/create-checkout-session", async(req, res) =>{
    const {products} = req.body
    // console.log(products)
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product[0].name
            },
            unit_amount: product[0].price
        },
        quantity: product[1]
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: "https://prince-ecom.vercel.app/success",
        cancel_url: "https://prince-ecom.vercel.app//cancel"
    })
    res.json({id: session.id})
})

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
