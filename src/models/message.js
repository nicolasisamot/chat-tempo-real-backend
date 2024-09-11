"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, {
        foreignKey: "sender_id",
        as: "SenderUser",
      });
      Message.belongsTo(models.User, {
        foreignKey: "recipient_id",
        as: "RecipientUser",
      });
    }
  }
  Message.init(
    {
      conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo conversation_id é obrigatório.",
          },
          notEmpty: {
            msg: "Campo conversation_id pode ser vazio.",
          },
        },
      },
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo sender_id é obrigatório.",
          },
          notEmpty: {
            msg: "Campo sender_id pode ser vazio.",
          },
        },
      },
      recipient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo recipient_id é obrigatório.",
          },
          notEmpty: {
            msg: "Campo recipient_id pode ser vazio.",
          },
        },
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo message é obrigatório.",
          },
          notEmpty: {
            msg: "Campo message não pode ser vazio.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Message",
      tableName: "messages",
      timestamps: true,
      paranoid: true,
    }
  );
  return Message;
};
