const {donation, getAllItems} = require("../Controller/donationController")

const donationRoute = require("express").Router()

donationRoute.post("/donation", donation)
donationRoute.get("/allitems", getAllItems)

module.exports = donationRoute