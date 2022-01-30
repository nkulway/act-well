'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Activities', 'average', {
      type: Sequelize.DataTypes.STRING
    })
    await queryInterface.changeColumn('Activities', 'temperature', {
      type: Sequelize.DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
