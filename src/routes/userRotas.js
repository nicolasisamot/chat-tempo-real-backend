const express = require("express");
const UserController = require("../controllers/UserController.js");
const autenticarUser = require("../middlewares/autenticarUser.js");

const userRotas = express.Router();

const userController = new UserController();

userRotas.get("/users", (req, res, next) =>
  userController.pegarTodosRegistros(req, res, next)
);

userRotas.get(
  "/users/q",
  (req, res, next) => autenticarUser(req, res, next),
  (req, res, next) => userController.pegarRegistrosPorUsername(req, res, next)
);
userRotas.post("/users/criar", (req, res, next) =>
  userController.criarRegistro(req, res, next)
);

/*
userRotas.get("/users/:id", (req, res, next) =>
  userController.pegarRegistroPorId(req, res, next)
);

userRotas.delete("/users/deletar/:id", (req, res, next) =>
  userController.deletarRegistroPorId(req, res, next)
);
userRotas.patch("/users/restaurar/:id", (req, res, next) => {
  userController.restaurarRegistroDeletadoPorId(req, res, next);
});
userRotas.patch("/users/desativar/:id", (req, res, next) =>
  userController.desativarRegistroPorId(req, res, next)
);
userRotas.patch("/users/ativar/:id", (req, res, next) => {
  userController.ativarRegistroPorId(req, res, next);
});*/

module.exports = userRotas;
