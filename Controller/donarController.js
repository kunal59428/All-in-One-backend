const Donar = require("../Models/donarModel")
const bcrypt = require("bcrypt")


// const arr = []

const register = async(req, res) =>{
    const details = req.body
    console.log(details)
    const duplicate = await Donar.findOne({email: details.email})
    if (duplicate) {
        return res.send({msg: "Email already registered"})
    }
    // arr.push(details)
    const hashedPassword = await bcrypt.hash(details.password, 15)
    details.password = hashedPassword;
    try {
        const donar = await Donar.create(details)
        console.log(res.data)
        res.send({msg: "User successfully registered", donar})
    } catch (error) {
        res.send({err: error})
    }
}

const login = async(req, res) =>{
    const detail = req.body
    const find = await Donar.findOne({email: detail.email})
    if (!find) {
        return res.send({msg: "You are not registered user", msg2: false})
    }

    res.send({msg: "User successfully login", find, msg2: true})
}


module.exports = {register, login}