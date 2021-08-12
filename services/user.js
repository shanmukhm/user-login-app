const db = require('../models');

module.exports = {
    findAll: async () => {
        let users = await db.user.findAll();
        users = users.map(u => {
            delete u.dataValues.password;
            return u.dataValues
        });
        // console.log(users)
        return users;
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