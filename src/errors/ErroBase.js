class ErroBase extends Error {
  constructor(msg = "Erro inesperado.", statusCode = 500) {
    super();
    this.msg = msg;
    this.statusCode = statusCode;
  }
  enviarResposta(res) {
    res.status(this.statusCode).json({
      msg: this.msg,
      statusCode: this.statusCode,
    });
  }
}

module.exports = ErroBase;
