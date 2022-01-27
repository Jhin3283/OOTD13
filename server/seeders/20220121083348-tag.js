'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tags', [
      {
        tag_num:1001,
        tag_name:'남성'
      },
      {
        tag_num:1002,
        tag_name:'여성'
      },
      {
        tag_num:2001,
        tag_name:'비 오는 날'
      },
      {
        tag_num:2002,
        tag_name:'흐린 날'
      },
      {
        tag_num:2003,
        tag_name:'눈 오는 날'
      },
      {
        tag_num:2004,
        tag_name:'맑은 날'
      },
      {
        tag_num:3001,
        tag_name:'SS시즌'
      },
      {
        tag_num:3002,
        tag_name:'FW시즌'
      },
      {
        tag_num:4001,
        tag_name:'Casual'
      },
      {
        tag_num:4002,
        tag_name:'Dandy'
      },
      {
        tag_num:4003,
        tag_name:'Street'
      },
      {
        tag_num:4004,
        tag_name:'Hiphop'
      },
      {
        tag_num:4005,
        tag_name:'Modern'
      },
      {
        tag_num:4006,
        tag_name:'Classic'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tags', null, {});
  }
};
