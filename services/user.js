const User = require('../models/user.model');
const Task = require('../models/task.model');

module.exports = {
    findAll: async () => {
        let users = await User.findAll();
        users = users.map(u => {
            delete u.dataValues.password;
            return u.dataValues
        });
        // console.log(users)
        return users;
    },
    save: async (user) => {
        return await User.create(user);
    },
    get: async (email) => {
        return await User.findOne({
            where: { email: email },
            include: Task
        });
    },
    update: async () => { },
    delete: async (email) => {
        return await User.destroy({
            where: { email }
          });
     }
};