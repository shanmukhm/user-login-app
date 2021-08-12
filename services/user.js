const User = require('../models/user.model');
const Task = require('../models/task.model');

module.exports = {
    findAll: async (pageParams) => {
        const page = +pageParams.page || 1, size = +pageParams.size || 10;
        console.log(`Finding all the users...`);

        let users = await User.findAll({
            offset: (page - 1) * size,
            limit: size
        });
        users = users.map(u => {
            const curr = u.toJSON();
            delete curr.password;
            return curr;
        });
        // console.log(users)
        return users;
    },

    create: async (user) => {
        console.log(`Creating user...`);
        const createdUser = await User.create(user);
        const createdUserJson = createdUser.toJSON();
        delete createdUserJson.password;
        console.log(`Created user successfully.`);
        return createdUserJson;
    },

    get: async (email) => {
        console.log(`Fetching user with email: ${email}!`);
        const dbUser = await User.findOne({
            where: { email },
            include: Task
        });

        console.log(dbUser);
        if (!dbUser) {
            console.log(`User not found with email: ${email}!`);
            return null;
        }
        return dbUser.toJSON();
    },

    update: async () => { },

    delete: async (email) => {
        console.log(`Deleting user with email: ${email}!`);
        return await User.destroy({
            where: { email }
        });
    }
};