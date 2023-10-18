// config.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('book_schema', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;