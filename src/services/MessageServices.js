const Services = require("./Services.js");
const db = require("../models/index.js");

class MessageServices extends Services {
  constructor() {
    super("Message");
  }

  async pegarConversas(id, transacao = null) {
    const conversas = await db[this.model].findAll({
      where: { conversation_id: id },
      order: [["createdAt", "ASC"]],
      transaction: transacao,
    });
    return conversas;
  }
}

module.exports = MessageServices;
