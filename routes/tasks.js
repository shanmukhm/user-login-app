const router = require('express').Router();
const db = require('../models');

router.post('/', async (req, res, next) => {
    try {
        const user = await db.user.findOne({
            email: req.body.userId
        })
        const taskCreationPromises = req.body.tasks.map(t => {
            return db.task.create(t);
        });

        const tasks = await Promise.all(taskCreationPromises);
        await user.addTasks(tasks);
        res.send('successfully created tasks!');
    } catch (e) {
        console.log('Error', e);
        res.send('Internal error', 500);
    }

})

module.exports = router;