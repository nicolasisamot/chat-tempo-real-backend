const Controller = require("./Controller.js");
const ContactServices = require("../services/ContactServices.js");

const contactServices = new ContactServices();

class ContactController extends Controller {
  constructor() {
    super(contactServices);
  }

  async pegarTodosContatosDeUmUsuario(req, res, next) {
    try {
      const id = Number(req.params.id);
      const contatos = await contactServices.pegarTodosContatosDeUmUsuario(id);
      res.status(200).json({
        resultado: contatos,
        msg: "Contatos encontrados.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ContactController;
