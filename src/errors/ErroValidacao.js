const ErroBase = require("./ErroBase.js");

class ErroValidacao extends ErroBase {
  constructor(msg = "Erro de validação.") {
    super(msg, 400);
  }
}

module.exports = ErroValidacao;
