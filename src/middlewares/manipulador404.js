const Erro404 = require("../errors/Erro404.js");

function manipulador404(req, res, next) {
  const erro = new Erro404();
  next(erro);
}

module.exports = manipulador404;
