/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'PostCategory',
      underscored: true,
      tableName: 'posts_categories',
    },
    );
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherkey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPost',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherkey: 'postId',
      });
    }
  return PostCategory;
}