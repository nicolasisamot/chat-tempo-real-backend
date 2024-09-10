const express = require("express");
const manejaErros = require("./middlewares/manejaErro.js");
const manipulador404 = require("./middlewares/manipulador404.js");
const usarRotas = require("./routes/index.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
usarRotas(app);
app.use(manipulador404);
app.use(manejaErros);

module.exports = app;
