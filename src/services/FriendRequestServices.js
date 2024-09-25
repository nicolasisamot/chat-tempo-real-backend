const Services = require("./Services.js");
const db = require("../models/index.js");
const { Op } = require("sequelize");

class FriendRequestServices extends Services {
  constructor() {
    super("FriendRequest");
  }

  async criarSolicitacao(obj, transacao = null) {
    const solicitacao = await db[this.model].create(
      {
        sender_id: obj.sender_id,
        recipient_id: obj.recipient_id,
        status: "pending",
      },

      {
        transaction: transacao,
      }
    );
    return db[this.model].findOne({
      where: {
        id: solicitacao.id,
      },
      include: [
        {
          model: db.User,
          as: "SenderUser",
          attributes: ["username", "id"],
        },
        // {
        //   model: db.User,
        //   as: "RecipientUser",
        //   attributes: ["username", "id"],
        // },
      ],
    });
  }
}

module.exports = FriendRequestServices;
