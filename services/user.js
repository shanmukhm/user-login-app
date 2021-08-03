const db = require('../models');

module.exports = {
    findAll: async () => {
        return db.user.findAll();
    },
    save: async (user) => {
        return await db.user.create(user);
    },
    get: async (email) => {
        return await db.user.findOne({
            where: { email: email },
            include: db.task
        });
    },
    update: async () => { },
    delete: async (email) => {
        return await db.user.destroy({
            where: { email }
          });
     }
};