const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Author;