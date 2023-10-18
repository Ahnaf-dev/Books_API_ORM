const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Author = require('./author');



const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Book.belongsTo(Author, {
  foreignKey: 'authorId', 
});

module.exports = Book;