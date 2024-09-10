const ErroBase = require("./ErroBase.js");

class Erro404 extends ErroBase {
  constructor(msg = "Não encontrado.") {
    super(msg, 404);
  }
}

module.exports = Erro404;
