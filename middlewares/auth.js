const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const isAuthenticated = (req, res, next) => {
    try {
        // get the token from the cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'user not logged in' });
        }

        // verify the token
        const decoded = jwt.verify(token, JWT_SECRET);

        // get the userid from the decoded token
        const userId = decoded.userId;

        // attach the userId to the request object for further use
        req.userId = userId;

        // call the next middleware or route handler
        next();
        
    } catch (error) {
        res.status(500).json({ message: 'Error in authenticating user...', error: error.message });
    }
}

module.exports = {
    isAuthenticated
}