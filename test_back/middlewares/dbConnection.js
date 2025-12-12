const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connexion avec le BD reussie"))
  .catch((err) => console.error("Impossible de se connecter :", err));


module.exports = sequelize