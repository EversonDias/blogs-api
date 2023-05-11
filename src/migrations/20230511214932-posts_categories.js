'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'posts_categories',
      {
        post_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          reference: {
            model: 'blog_posts',
            key: 'id',
          }
        },
        category_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          reference: {
            model: 'categories',
            key: 'id',
          }
        },
      }
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
