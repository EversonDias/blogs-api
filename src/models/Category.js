/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Category',
      underscored: true,
      tableName: 'categories',
    },
  );
  return Category;
}