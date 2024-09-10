const ErroBase = require("../errors/ErroBase");
const Erro404 = require("../errors/Erro404");

function manejaErros(error, req, res, next) {
  console.log(error);
  if (error instanceof Erro404) {
    error.enviarResposta(res);
  } else if (error instanceof ErroBase) {
    error.enviarResposta(res);
  } else {
    throw new ErroBase().enviarResposta(res);
  }
}

module.exports = manejaErros;
