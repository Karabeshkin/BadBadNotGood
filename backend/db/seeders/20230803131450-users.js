/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Тося',
        password: '123',
        email: '345@mail.ru',
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Jopa',
        password: '1234',
        email: 'ya_ne@mail.ru',
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
