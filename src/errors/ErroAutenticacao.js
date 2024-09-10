const ErroBase = require("./ErroBase.js");

class ErroAutenticacao extends ErroBase {
  constructor(msg = "Erro de autenticação.") {
    super(msg, 401);
  }
}

module.exports = ErroAutenticacao;
