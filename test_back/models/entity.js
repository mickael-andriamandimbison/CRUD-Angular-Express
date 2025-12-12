const sequelize = require("../middlewares/dbConnection");
const { DataTypes } = require("sequelize");
const User = require("./user")

const Entity = sequelize.define(
  "Entity",
  {
    id_Entity: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    entityname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "Entity",
    timestamps: true,
  }
);

module.exports = Entity;
