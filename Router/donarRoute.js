const {register, login} = require("../Controller/donarController")

const router = require("express").Router()


router.post("/register", register)

router.post("/login", login)

module.exports = router