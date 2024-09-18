const Controller = require("./Controller.js");
const UserServices = require("../services/UserServices.js");

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async pegarRegistrosPorUsername(req, res, next) {
    try {
      const { username, page, limit } = req.query;

      const registros = await userServices.pegarRegistrosPorUsername(
        {
          username,
        },
        req.user.id
      );
      res.status(200).json({
        resultado: registros,
        msg: "Registros encontrados.",
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UserController;
