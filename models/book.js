const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Book;