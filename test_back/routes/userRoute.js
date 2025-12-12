const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController")

router.post('/create-user',UserController.createUser)
router.get('/list-user',UserController.getAllUser)
router.get('/detail-user/:id',UserController.getUserById)
router.put('/update-user/:id',UserController.updateUser)
router.delete('/delete-user/:id',UserController.deleteUser)
module.exports = router