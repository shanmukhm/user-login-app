const router = require('express').Router();
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { user } = require('../models');

dotenv.config();

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send('All inputs required.');
        }

        const user = await db.user.findOne({
            where: {
                email
            }
        })
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                userId: user.id,
                email
            }, process.env.TOKEN_SECRET,
                {
                    expiresIn: '2h'
                })

            user.token = token;

            return res.status(200).send(user);
        }
        return res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log('Error', error);
        return res.send('Unknown error', 500);
    }
})

router.post('/register', async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!(email && password && firstName && lastName)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await db.user.findOne({ where: { email } });
        console.log(oldUser)
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const userCreated = await db.user.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword
        });
        // console.log(process.env.TOKEN_SECRET);
        const token = jwt.sign(
            {
                userId: userCreated.id,
                email
            }, process.env.TOKEN_SECRET,
            {
                expiresIn: "2h",
            }
        );
        userCreated.token = token;

        res.status(201).json(userCreated);
    } catch (error) {
        console.log(`Error while registration`, error);
        res.status(500).send(`Error occured`);
    }
})

module.exports = router;