const router = require('express').Router();
const Task = require('../models/task.model');
const User = require('../models/user.model');

router.post('/', async (req, res, next) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        const taskCreationPromises = req.body.tasks.map(t => {
            return Task.create(t);
        });

        const tasks = await Promise.all(taskCreationPromises);
        await user.addTasks(tasks);
        res.status(201).json(tasks);
    } catch (e) {
        console.log('Error', e);
        res.send('Internal error', 500);
    }

})

router.delete('/:taskId', async (req, res, next) => {
    try {
        const taskId = req.params.taskId
        const taskD = await Task.destroy({
            where: { id: taskId }
          });
        res.status(200).json({success: true});
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed deleting task due to internal error'});
    }
})

module.exports = router;