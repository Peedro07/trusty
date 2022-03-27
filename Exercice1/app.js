// gestion des imports
const express = require("express");
const cors = require("cors");

const openWork = require("./routes/openWork");
// Run express
const app = express();
app.use(express.json());
app.use(cors())


// on utilise body-parser afin d'extraire et gerer le JSON de nos requetes
app.use(express.json());


app.use("/", openWork);

module.exports = app;
