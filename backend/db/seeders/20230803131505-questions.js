"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Questions", [
      {
        themeId: 1,
        question:
          "Какой фильм до сих пор держит звание самого кассового фильма в истории",
        answer: "Аватар",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 1,
        question:
          "В каком фильме все говорят только правду, кроме одного человека ?",
        answer: "Изобретение лжи",
        score_points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 1,
        question:
          "Как мы знаем, Квентин Тарантино сам пишет сценарии для своих работ, но есть один фильм который он адаптировал с книги своего любимого автора. Как называется эта адаптация",
        answer: "Джеки Браун",
        score_points: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 1,
        question:
          'Назовите режисера, с которым в конеце 60-х годов призошло ужастное событие, которое в последсвии "переосмыслил" Квентин Тарантино в своем фильме "Однажды в.. Голлевуде"',
        answer: "Полански",
        score_points: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 1,
        question:
          'Награда 1000 и рукопожатие: в Японии есть игровая серия Silent Hill в жанре survival horror. Одним из источников вдозновления для художников из "Team Silent" послужил Американский фильм про человека вернувшегося с войны и переживающего ПТСР. Назовите этот фильм',
        answer: "Лестница Иакова",
        score_points: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question:
          "С латинского языка название этого инструмента переводится как «дуновение»",
        answer: "Флейта",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question:
          "Этих животных скрипачи держали в футлярах, чтобы не потели руки",
        answer: "Жабы",
        score_points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question: "Из какого вечнозеленого дерева делают пианино и скрипки? ",
        answer: "Ель",
        score_points: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question:
          "Во время какой песни Майкл Джексон дебютировал со своей торговой маркой Moonwalk в 1983 году?",
        answer: "Билли Джин",
        score_points: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question:
          "Эминем выпустил свой одноименный альбом (названный в его честь) в 2000 году, как он назывался?",
        answer: "Marshall Mathers LP",
        score_points: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "В глаз или в жопу раз?",
        answer: "Что-то пиратов я здесь не вижу",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "В глаз или в жопу раз?",
        answer: "Что-то пиратов я здесь не вижу",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "В глаз или в жопу раз?",
        answer: "Что-то пиратов я здесь не вижу",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "В глаз или в жопу раз?",
        answer: "Что-то пиратов я здесь не вижу",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        themeId: 3,
        question: "В глаз или в жопу раз?",
        answer: "Что-то пиратов я здесь не вижу",
        score_points: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
