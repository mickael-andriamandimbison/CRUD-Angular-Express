const EntityService = require("../services/entityService.js");
const Result = require("../utils/result.js");
const erroHandler = require("../utils/errorHandler.js");

class EntityController {
  static async createEntity(req, res) {
    try {
      const data = req.body;
      const entity = await EntityService.createEntity(data);
      return Result.created(res, "entity ajouter avec succés", {
        data: entity,
      });
    } catch (error) {
      return erroHandler(res, error);
    }
  }
}

module.exports = EntityController