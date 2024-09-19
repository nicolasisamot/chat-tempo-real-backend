const express = require("express");
const FriendRequestController = require("../controllers/FriendRequestController.js");

const friendRequestRotas = express.Router();

const friendRequestController = new FriendRequestController();

friendRequestRotas.get("/friend-requests", (req, res, next) =>
  friendRequestController.pegarTodosRegistros(req, res, next)
);
friendRequestRotas.post("/friend-requests/criar", (req, res, next) =>
  friendRequestController.criarRegistro(req, res, next)
);

module.exports = friendRequestRotas;
