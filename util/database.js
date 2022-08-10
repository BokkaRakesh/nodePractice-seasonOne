const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'igo9092121Ry&', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
