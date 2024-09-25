"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      Contact.belongsTo(models.User, {
        foreignKey: "contact_id",
        as: "ContactUser",
      });
      Contact.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "User",
      });
    }
  }
  Contact.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo user_id é obrigatório.",
          },
          notEmpty: {
            msg: "Campo user_id pode ser vazio.",
          },
        },
      },
      contact_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo contact_id é obrigatório.",
          },
          notEmpty: {
            msg: "Campo contact_id pode ser vazio.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Contact",
      tableName: "contacts",
      timestamps: true,
      paranoid: true,
    }
  );
  return Contact;
};
