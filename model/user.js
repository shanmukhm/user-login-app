const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/sql_db');

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        // allowNull defaults to true
        allowNull: false
    },

  }, {
    // Other model options go here
    freezeTableName: true
  });