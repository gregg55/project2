'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name:'Alvin',
          username: 'Alvin1',
          password: 'suit1',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Bob',
          username: 'Bob1',
          password: 'suit2',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Cole',
          username: 'Cole1',
          password: 'suit3',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      ],
      {}
    );
  },
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
