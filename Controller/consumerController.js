
const arr = []

const consumer_register = (req, res) =>{
    const details = req.body
    console.log(details)
    const duplicate = arr.find((item) => item.email === details.email)
    if (duplicate) {
        return res.send("Email already registered")
    }
    arr.push(details)
    res.send({msg: "User successfully registered", arr})
}

const consumer_login = (req, res) =>{
    const detail = req.body
    const finduser = arr.find(item => item.email === detail.email)
    if (!finduser) {
        return res.send({msg: "YOu are not registered user"})
    }

    res.send({msg: "User successfully login", finduser})
}


module.exports = {consumer_register, consumer_login}