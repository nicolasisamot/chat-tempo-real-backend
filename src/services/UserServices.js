const Services = require("./Services.js");
const db = require("../models/index.js");
const { Op } = require("sequelize");
const ContactServices = require("../services/ContactServices.js");

class UserServices extends Services {
  constructor() {
    super("User");

    this.contactServices = new ContactServices();
  }

  async pegarRegistrosPorUsername(objBusca, id, transacao = null) {
    const contatos = await this.contactServices.pegarTodosContatosDeUmUsuario(
      id
    );
    const contatosIds = contatos.map((contato) => contato.id);

    const usersEncontrados = await db[this.model].findAll({
      where: {
        username: {
          [Op.regexp]: `^${objBusca.username}`,
        },
        id: {
          [Op.notIn]: [id],
        },
      },
      attributes: ["username", "id"],
      transaction: transacao,
    });

    return usersEncontrados.map((user) => {
      if (contatosIds.includes(user.id)) {
        return { ...user.dataValues, isContact: true };
      } else {
        return { ...user.dataValues, isContact: false };
      }
    });
  }
}

module.exports = UserServices;
