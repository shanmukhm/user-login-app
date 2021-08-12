const Task = require('../models/task.model');
const User = require('../models/user.model');

module.exports = {
    createTasks: async (email, tasks) => {
        const user = await User.findOne({
            where : {
                email
            }
        });
        const taskCreationPromises = tasks.map(t => {
            return Task.create(t);
        });

        const tasksCreated = await Promise.all(taskCreationPromises);
        await user.addTasks(tasksCreated);
        return tasksCreated;
    }
}