const sequelize = require("../middlewares/dbConnection");
const { DataTypes } = require("sequelize");
const User = require("./user");
const Entity = require("./entity");

const UserEntity = sequelize.define(
  "UserEntity",
  {
    id_userEntity: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    id_User: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id_User",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    id_Entity: {
      type: DataTypes.UUID,
      references: {
        model: Entity,
        key: "id_Entity",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "UserEntity",
    timestamps: true,
  }
);

module.exports = UserEntity;
