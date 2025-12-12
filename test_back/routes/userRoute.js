const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController")

router.get('/list-user',UserController.getAllUser)

module.exports = router