require("dotenv").config()
const express = require("express")
const port = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get('/',(req,res)=>res.send("l'api fonctionne"))

app.listen(port,()=>console.log("Le serveur back-end est lancé sur le port "+port))