const express = require("express")
const router = express.Router()
const UserEntityController = require("../controllers/user_entityController")

router.post('/create-user-entity',UserEntityController.createUserEntity)
router.get('/list-user-entity',UserEntityController.getAllUserEntity)
router.get('/detail-user-entity/:id',UserEntityController.getUserEntityById)
router.delete('/delete-user-entity/:id',UserEntityController.deleteUserEntity)
router.put('/update-user-entity/:id',UserEntityController.updateUserEntity)

module.exports = router
