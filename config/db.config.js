module.exports = {

    HOST: "localhost",

    USER: "sbuser",

    PASSWORD: "sbpwd",

    DB: "sugarboxdb",

    dialect: "mysql",

    pool: {

        max: 5,

        min: 0,

        acquire: 30000,

        idle: 10000

    }

};