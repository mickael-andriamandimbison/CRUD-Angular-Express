require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const sequelize = require("./middlewares/dbConnection");
const userRoute = require('./routes/userRoute')
const entityRoute = require('./routes/entityRoute')

app.use(express.json());
app.use('/api/user',userRoute)
app.use('/api/entity',entityRoute)


require("./models/association")
sequelize
  .sync({ force: false })
  .then(() => console.log("Table synchronisé"))
  .catch((err) => console.log("Erreur lors de la creation des tables ", err));

app.get("/", (req, res) => res.send("l'api fonctionne"));

app.listen(port, () =>
  console.log("Le serveur back-end est lancé sur le port " + port)
);
