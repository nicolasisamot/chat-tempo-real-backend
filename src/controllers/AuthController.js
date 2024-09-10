const jwt = require("jsonwebtoken");
const Controller = require("./Controller.js");
const UserServices = require("../services/UserServices.js");
const ErroValidacao = require("../errors/ErroValidacao.js");
const ErroAutenticacao = require("../errors/ErroAutenticacao.js");
const SECRET = process.env.SECRET;

const userServices = new UserServices();

class AuthController extends Controller {
  constructor() {
    super(userServices);
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        throw new ErroValidacao("Username e password são obrigatórios.");
      }
      const user = await userServices.pegarUmRegistroPorUmaPropiedade({
        username,
      });

      if (user === null) {
        throw new ErroAutenticacao("Username ou password incorretos.");
      }

      if (user.password !== password) {
        throw new ErroAutenticacao("Username ou password incorretos.");
      } else {
        const token = jwt.sign(
          {
            user: {
              id: user.id,
              username: user.username,
              role: user.role,
            },
          },
          SECRET,
          {
            expiresIn: "7d",
            algorithm: "HS256",
          }
        );

        res.status(200).json({
          msg: "Login realizado com sucesso.",
          token,
          user: {
            id: user.id,
            username: user.username,
            role: user.role,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
