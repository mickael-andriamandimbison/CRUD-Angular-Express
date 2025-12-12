const express = require("express")
const router = express.Router()
const EntityController = require("../controllers/entityController")

router.post('/create-entity',EntityController.createEntity)
router.get('/list-entity',EntityController.getAllEntity)

module.exports = router