"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FriendRequest extends Model {
    static associate(models) {
      FriendRequest.belongsTo(models.User, {
        foreignKey: "sender_id",
        as: "SenderUser",
      });
      FriendRequest.belongsTo(models.User, {
        foreignKey: "recipient_id",
        as: "RecipientUser",
      });
    }
  }
  FriendRequest.init(
    {
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
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["pending", "accepted", "declined"]],
            msg: "Campo status deve ser pending, accepted e declined.",
          },
          notNull: {
            msg: "Campo status é obrigatório.",
          },
          notEmpty: {
            msg: "Campo status não pode ser vazio.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "FriendRequest",
      tableName: "friend_requests",
      timestamps: true,
      paranoid: true,
    }
  );
  return FriendRequest;
};
