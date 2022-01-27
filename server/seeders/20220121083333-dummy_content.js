'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contents', [
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'WHO.A.U 린넨 셔츠 39,900원에 구매',
        pants:'자라 옴므 기능성 슬랙스 49,900원',
        acc:'사은품으로 받은 에코백',
        outer:'',
        shoes:'슈펜 비슬로우 콜라보 더비슈즈 79,900원 슈펜 공식몰에서 구매'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contents', null, {});
  }
};
