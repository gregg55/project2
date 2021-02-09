'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Suits', 'userId', {
      type: Sequelize.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Suits', 'userId');
  }
};