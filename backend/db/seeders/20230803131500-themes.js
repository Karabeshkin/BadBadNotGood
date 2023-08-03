"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Themes", [
      {
        theme: "Тема 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme: "Тема 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme: "Тема 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
