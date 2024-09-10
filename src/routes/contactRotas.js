const express = require("express");
const ContactController = require("../controllers/ContactController.js");

const contactRotas = express.Router();

const contactController = new ContactController();

contactRotas.post("/contatos/criar", (req, res, next) =>
  contactController.criarRegistro(req, res, next)
);

contactRotas.get("/contatos/:id", (req, res, next) => {
  contactController.pegarTodosContatosDeUmUsuario(req, res, next);
});

module.exports = contactRotas;
