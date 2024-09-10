const Services = require("./Services.js");
const db = require("../models/index.js");
const { Op } = require("sequelize");
const { formatContatos } = require("../utils/formatContatos.js");

class ContactServices extends Services {
  constructor() {
    super("Contact");
  }

  async pegarTodosContatosDeUmUsuario(id, transacao = null) {
    const contatos = await db[this.model].findAll({
      where: {
        [Op.or]: [{ user_id: id }, { contact_id: id }],
      },
      attributes: {
        include: ["id"],
        exclude: [
          "createdAt",
          "updatedAt",
          "deletedAt",
          "user_id",
          "contact_id",
        ],
      },
      include: [
        {
          model: db.User,
          as: "User", // Associado com user_id
          attributes: ["username", "id"],
        },
        {
          model: db.User,
          as: "ContactUser", // Associado com contact_id
          attributes: ["username", "id"],
        },
      ],
      transaction: transacao,
    });

    return formatContatos(contatos, id);
  }
}

module.exports = ContactServices;
