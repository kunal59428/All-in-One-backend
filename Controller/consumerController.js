const Consumer = require("../Models/consumerModel")
const bcrypt = require("bcrypt")

const consumer_register = async(req, res) =>{
    const details = req.body
    // console.log(details)
    const duplicate = await Consumer.findOne({email: details.email})
    if (duplicate) {
        return res.send({msg:"Email already registered"})
    }
    // arr.push(details)
    const hashedPassword = await bcrypt.hash(details.password, 15)
    details.password = hashedPassword;
    try {
        const consumer = await Consumer.create(details)
        res.send({msg: "User successfully registered", consumer})
    } catch (error) {
        res.send({err: error})
    }
}

const consumer_login = async(req, res) =>{
    const detail = req.body
    const find = await Consumer.findOne({email: detail.email})
    if (!find) {
        return res.send({msg: "You are not registered user", msg2: false})
    }

    res.send({msg: "User successfully login", find, msg2: true})
}


module.exports = {consumer_register, consumer_login}