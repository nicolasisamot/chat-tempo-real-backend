const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET || "secret";
const ErroAutenticacao = require("../errors/ErroAutenticacao.js");
const ErroValidacao = require("../errors/ErroValidacao.js");

function autenticarUser(req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw new ErroAutenticacao("Token ausente.");
    }

    const [, token] = req.headers.authorization.split(" ");
    if (!validar(token)) {
      throw new ErroValidacao("Token inválido.");
    }

    const decoded = jwt.decode(token);

    req.user = decoded.user;

    next();
  } catch (error) {
    next(error);
  }
}
function validar(token) {
  try {
    jwt.verify(token, SECRET);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = autenticarUser;
