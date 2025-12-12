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

  static async getAllEntity(req, res) {
    try {
      const list = await EntityService.getAllEntity();
      return Result.Ok(res, "liste des users", list);
    } catch (error) {
      return erroHandler(res, error);
    }
  }

  static async getEntityById(req, res) {
    try {
      const id = req.params.id;
      const entity = await EntityService.getEntityById(id);
      return Result.Ok(res, "detail entity", entity);
    } catch (error) {
      return erroHandler(res, error);
    }
  }

  static async updateEntityById(req,res){
    try {
        const id = req.params.id;
        const data = req.body

        const entity = await EntityService.updateEntityById(id,data)
        return Result.Ok(res, "modification entity reussi", entity);
    } catch (error) {
        return erroHandler(res, error);
    }
  }
}

module.exports = EntityController;
