const express = require("express")
const router = require("./Router/donarRoute")
const cors = require("cors")
const consumerRouter = require("./Router/consumerRoute")
const colors = require("colors")
const connectToDb = require("./DB/connection")
const donationRoute = require("./Router/donationRoute")
require("dotenv").config()

const server = express()
const PORT = process.env.PORT

server.use(express.json())   // for the use of body parser

server.use(cors())

server.get("/home", (req, res) =>{
    res.send({msg:'home'})
})

server.use("/api", router)
server.use("/consumer",consumerRouter)
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
}

startConnection()
