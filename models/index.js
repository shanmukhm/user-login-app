const config = require('../config/config.js');
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * 
 * @returns {Sequelize.Sequelize} sequelize
 */
function getConnection() {
  return sequelize;
}

db.getConnection = getConnection;

module.exports = db;