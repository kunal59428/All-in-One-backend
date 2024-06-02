const Donation = require("../Models/donationModel")

const donation = async(req, res) =>{
    const details = req.body
    console.log(details)
    const dItems = await Donation.create(details)
    res.send({msg: "Item donated successfully...", dItems})
}

const getAllItems = async(req, res) =>{
    const items = await Donation.find()
    res.send({msg: "All items", items})
}

module.exports = {donation, getAllItems}