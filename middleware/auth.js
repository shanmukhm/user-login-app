const jwt = require('jsonwebtoken');
// const config = process.env;
const config = require('../config/config.js');

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token) {
        res.status(403).send('Token is required for authentication');
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_SECRET)
        req.user = decoded;
        console.log(`Token is valid for user : ${decoded.email}`);
        const emailInReq = req.body.email || req.body.email || req.query.email || req.query.email;
        if(emailInReq && decoded.email !== emailInReq) {
            return res.status(401).send("Unathorized to access another user's information.");
        }
        req.email = decoded.email;
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }

    return next();
}

module.exports = verifyToken;