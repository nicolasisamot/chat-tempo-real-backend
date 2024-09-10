"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Contact, {
        foreignKey: "user_id",
        allowNull: true,
      });
      User.hasMany(models.Contact, {
        foreignKey: "contact_id",
        allowNull: true,
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo username é obrigatório.",
          },
          notEmpty: {
            msg: "Campo username não pode ser vazio.",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo password é obrigatório.",
          },
          notEmpty: {
            msg: "Campo password não pode ser vazio.",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Campo role é obrigatório.",
          },
          notEmpty: {
            msg: "Campo role não pode ser vazio.",
          },
          isIn: {
            args: [["admin", "user"]],
            msg: "Campo role deve ser admin ou user.",
          },
        },
      },
      ativo: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
      paranoid: true,
    }
  );
  return User;
};
