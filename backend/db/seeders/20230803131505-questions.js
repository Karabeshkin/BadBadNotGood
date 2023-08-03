"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        themeId: 1,
        question: "А хули",
        answer: "Тебя ебать не должо",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 1,
        question: "Скока?",
        answer: "У тебя стока нет",
        score_points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 1,
        question: "Бык или Як?",
        answer: "Я человек",
        score_points: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question: "Ты с улицы или с улицей?",
        answer: "я чёрт",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question: "Почем опиум для народа?",
        answer: "Тебе не дадим",
        score_points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question: "В глаз или в жопу раз?",
        answer: "Что-то пиратов я здесь не вижу",
        score_points: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "Сыграешь на пианино?",
        answer: "Сначала настрой",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "Бросят тряпку, что делать будешь?",
        answer: "аккуратно обойду",
        score_points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "Кто не мерзнет на морозе?",
        answer: "Шлюхи и пингвины",
        score_points: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
