'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Muhammad Rizky',
        phone: '085103101001',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rizky Putra',
        phone: '082110891100',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },


  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
