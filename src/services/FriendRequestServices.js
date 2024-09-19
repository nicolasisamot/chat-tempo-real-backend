const Services = require("./Services.js");
const db = require("../models/index.js");
const { Op } = require("sequelize");

class FriendRequestServices extends Services {
  constructor() {
    super("FriendRequest");
  }

  async criarSolicitacao(obj, transacao = null) {
    return await db[this.model].create(
      {
        sender_id: obj.sender_id,
        recipient_id: obj.recipient_id,
        status: "pending",
      },
      { transaction: transacao }
    );
  }
}

module.exports = FriendRequestServices;
