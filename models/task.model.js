const { DataTypes } = require('sequelize');
const { getConnection } = require('.');
const User = require('./user.model');
const sequelize = getConnection();

const Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    }
});

User.hasMany(Task);
Task.belongsTo(User);

module.exports = Task;
