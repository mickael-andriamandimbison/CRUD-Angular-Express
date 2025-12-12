const express = require("express")
const router = express.Router()
const EntityController = require("../controllers/entityController")

router.post('/create-entity',EntityController.createEntity)

module.exports = router