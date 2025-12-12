const express = require("express")
const router = express.Router()
const EntityController = require("../controllers/entityController")

router.post('/create-entity',EntityController.createEntity)
router.get('/list-entity',EntityController.getAllEntity)
router.get('/detail-entity/:id',EntityController.getEntityById)
router.put('/update-entity/:id',EntityController.updateEntityById)
router.delete('/delete-entity/:id',EntityController.deleteEntityById)

module.exports = router