const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbconfig = {
    database: process.env.DB,
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USER,
    password: process.env.PASSWORD,
    dialect: 'mysql'
};

const sequelize = new Sequelize(dbconfig);

module.exports = {
    sequelize: sequelize,
    connect: async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    },

    close: async () => {
        await sequelize.close();
    },

    getSequelize: () => {
        return sequelize;
    }
};
