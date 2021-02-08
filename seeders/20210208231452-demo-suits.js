"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Suits",
      [
        {
          name:'Babe Ruth',
          team: 'yankees',
          year: '1965',
          createdAt: new Date(),
          updatedAt: new Date(),
        
        },
        {
          name:'Hank Aaron',
          team: 'braves',
          year: '1966',
          createdAt: new Date(),
          updatedAt: new Date(),
         
          
        },
        {
          name:'Mickey Mantle',
          team: 'yankees',
          year: '1967',
          createdAt: new Date(),
          updatedAt: new Date(),
         
        },
        {
          name:'Bob Gibson',
          team: 'cardinals',
          year: '1968',
          createdAt: new Date(),
          updatedAt: new Date(),
         
        },
        {
          name:'Tom Seaver',
          team: 'mets',
          year: '1969',
          createdAt: new Date(),
          updatedAt: new Date(),
        
          
        },
        {
          name:'Ricky Henderson',
          team: 'Athletics',
          year: '1970',
          createdAt: new Date(),
          updatedAt: new Date(),
       
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
 
    /**
     * Add commands to revert seed here.
     *
     * Example:
    await queryInterface.bulkDelete('People', null, {});
     */
  },
};