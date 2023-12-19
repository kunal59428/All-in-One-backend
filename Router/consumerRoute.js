const { consumer_register, consumer_login } = require("../Controller/consumerController")

const consumerRouter = require("express").Router()


consumerRouter.post("/consumer-register",consumer_register)

consumerRouter.post("/consumer-login", consumer_login)

module.exports = consumerRouter