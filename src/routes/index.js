const express = require("express");
const userRotas = require("./userRotas");
const authRotas = require("./authRotas");
const contactRotas = require("./contactRotas");

function usarRotas(app) {
  app.use(userRotas, authRotas, contactRotas);
  app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
  });
}

module.exports = usarRotas;
