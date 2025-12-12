const sequelize = require("../middlewares/dbConnection");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id_User: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      unique : true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "User",
    timestamps: true,
  }
);

module.exports = User;
