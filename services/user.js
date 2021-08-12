const User = require('../models/user.model');
const Task = require('../models/task.model');

module.exports = {
    findAll: async () => {
        let users = await User.findAll();
        
        users = users.map(u => {
            const curr = u.toJSON();
            delete curr.password;
            return curr;
        });
        // console.log(users)
        return users;
    },
    save: async (user) => {
        return await User.create(user);
    },
    get: async (email) => {
        const dbUser = await User.findOne({
            where: { email: email },
            include: Task
        });

        return dbUser.toJSON();
    },
    update: async () => { },
    delete: async (email) => {
        return await User.destroy({
            where: { email }
          });
     }
};