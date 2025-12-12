const { where } = require("sequelize");
const UserEntity = require("../models/userEntity");
const Entity = require("../models/entity");
const User = require("../models/user");
const createErr = require("../utils/createError");

class UserEntityService {
  static async getAllUserEntity() {
    const list = await UserEntity.findAll();
    return list;
  }

  static async getUserEntityById(id) {
    const user_entity = await UserEntity.findByPk(id);
    if (!user_entity) throw createErr("aucun user entity", 404);
    return user_entity;
  }

  static async createUserEntity(data) {
    const user = await User.findByPk(data.id_User);
    const entity = await Entity.findByPk(data.id_Entity);

    if (!user || !entity) throw createErr("information maquante", 404);

    const user_entity = await UserEntity.create(data);

    return user_entity;
  }

  static async deleteUserEntity(id) {
    const user_entity = await UserEntity.findByPk(id);

    if (!user_entity) throw createErr("aucun user entity", 404);

    await user_entity.destroy();

    return null;
  }

  static async updateUserEntity(id, data) {
    const user_entity = await UserEntity.findByPk(id);
    if (!user_entity) throw createErr("aucun user entity", 404);

    const user = await User.findByPk(data.id_User);
    const entity = await Entity.findByPk(data.id_Entity);

    if (!user || !entity) throw createErr("user ou entity n'existe pas ", 404);

    const new_user_entity = await user_entity.update(data);

    return new_user_entity;
  }
}

module.exports = UserEntityService;
