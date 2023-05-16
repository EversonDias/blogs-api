/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'BlogPost',
      underscored: true,
      tableName: 'blog_posts',
    },
  );
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return BlogPost;
}