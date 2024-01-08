const { consumer_register, consumer_login } = require("../Controller/consumerController")

const consumerRouter = require("express").Router()


consumerRouter.post("/register",consumer_register)

consumerRouter.post("/login", consumer_login)

consumerRouter.get("/login", consumer_login)

module.exports = consumerRouter