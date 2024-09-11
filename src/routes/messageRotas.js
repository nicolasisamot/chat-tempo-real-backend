const express = require("express");
const MessageController = require("../controllers/MessageController.js");
const messageRotas = express.Router();

const messageController = new MessageController();

messageRotas.post("/messages/criar", (req, res, next) =>
  messageController.criarRegistro(req, res, next)
);

messageRotas.get("/messages/:id", (req, res, next) =>
  messageController.pegarConversas(req, res, next)
);

module.exports = messageRotas;
