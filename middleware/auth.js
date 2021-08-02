const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token) {
        res.status(403).send('Token is required for authentication');
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_SECRET)
        req.user = decoded;
        console.log(`Token is valid for user : ${decoded.email}`);
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }

    return next();
}

module.exports = verifyToken;