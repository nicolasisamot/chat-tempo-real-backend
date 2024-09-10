"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          username: "nicolasisamot",
          password: "Teste123!",
          role: "user",
          ativo: true,
          createdAt: "2024-09-07T22:35:10.000Z",
          updatedAt: "2024-09-07T22:35:10.000Z",
          deletedAt: null,
        },
        {
          id: 2,
          username: "ivonetetomasi",
          password: "Teste123!",
          role: "user",
          ativo: true,
          createdAt: "2024-09-07T22:35:41.000Z",
          updatedAt: "2024-09-07T22:35:41.000Z",
          deletedAt: null,
        },
        {
          id: 3,
          username: "isadoraborges",
          password: "Teste123!",
          role: "user",
          ativo: true,
          createdAt: "2024-09-09T20:31:30.000Z",
          updatedAt: "2024-09-09T20:31:30.000Z",
          deletedAt: null,
        },
        {
          id: 4,
          username: "joaquimluis",
          password: "Teste123!",
          role: "user",
          ativo: true,
          createdAt: "2024-09-09T20:31:38.000Z",
          updatedAt: "2024-09-09T20:31:38.000Z",
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
