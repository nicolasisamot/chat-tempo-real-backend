const Controller = require("./Controller.js");
const MessageServices = require("../services/MessageServices.js");
const messageServices = new MessageServices();

class MessageController extends Controller {
  constructor() {
    super(messageServices);
  }

  async pegarConversas(req, res, next) {
    try {
      const id = Number(req.params.id);
      const conversas = await messageServices.pegarConversas(id);
      res.status(200).json({
        resultado: conversas,
        msg: "Conversas encontradas.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MessageController;
