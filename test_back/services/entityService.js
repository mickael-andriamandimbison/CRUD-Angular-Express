const { where } = require("sequelize");
const Entity = require("../models/entity");
const createErr = require("../utils/createError");

class EntityService {
  static async createEntity(data) {
    const isExist = await Entity.findOne({
      where: {
        entityname: data.entityname,
      },
    });
    if (isExist) throw createErr("nom deja utiliseé", 409);
    const newEntity = await Entity.create(data);
    return newEntity;
  }

  static async getAllEntity() {
    const list = await Entity.findAll();
    return list;
  }

  static async getEntityById(id) {
    const entity = await Entity.findByPk(id);
    if (!entity) throw createErr("aucun entity", 404);
    return entity;
  }

  static async updateEntityById(id, data) {
    const entity = await Entity.findByPk(id);

    if (!entity) throw createErr("aucun entité", 404);

    const entityupdate = await entity.update(data);

    return entityupdate;
  }

  static async deleteEntityById(id) {}
}

module.exports = EntityService;
