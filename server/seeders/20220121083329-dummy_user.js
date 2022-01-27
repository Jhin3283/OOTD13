'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'kimcoding',
        email:'kimcoding@gmail.com',
        password:'1234',
        login_method:0
      },
      {
        username: 'parkhacker',
        email:'parkhacker@github.com',
        password:"1234",
        login_method:0
      },
      {
        username: 'qwp0905',
        email:'qwp0905@github.com',
        password:null,
        login_method:1
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
