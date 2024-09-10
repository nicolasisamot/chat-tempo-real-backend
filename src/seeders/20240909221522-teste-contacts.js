"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "contacts",
      [
        {
          id: 1,
          user_id: 2,
          contact_id: 1,
          createdAt: "2024-09-09T22:14:03.000Z",
          updatedAt: "2024-09-09T22:14:03.000Z",
          deletedAt: null,
        },
        {
          id: 2,
          user_id: 2,
          contact_id: 4,
          createdAt: "2024-09-09T22:14:08.000Z",
          updatedAt: "2024-09-09T22:14:08.000Z",
          deletedAt: null,
        },
        {
          id: 3,
          user_id: 3,
          contact_id: 2,
          createdAt: "2024-09-09T22:14:18.000Z",
          updatedAt: "2024-09-09T22:14:18.000Z",
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contacts", null, {});
  },
};
