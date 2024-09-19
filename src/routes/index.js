const express = require("express");
const userRotas = require("./userRotas");
const authRotas = require("./authRotas");
const contactRotas = require("./contactRotas");
const messageRotas = require("./messageRotas");

const friendRequestRotas = require("./friendRequestRotas");

function usarRotas(app) {
  app.use(userRotas, authRotas, contactRotas, messageRotas, friendRequestRotas);
  app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
  });
}

module.exports = usarRotas;
