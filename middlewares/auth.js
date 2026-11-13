const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const User = require('../models/user');

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

const allowedRoles = (roles) => {
    return async (req, res, next) => {
        // get the userId from the request object
        const userId = req.userId;

        // check if the userId is present
        if (!userId) {
            return res.status(401).json({ message: 'user not logged in' });
        }

        // get the user from the database using the userId
        const user = await User.findById(userId);

        // check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        // check if the user's role is in the allowed roles
        if (!roles.includes(user.role)) {
            return res.status(403).json({ message: 'user not authorized' });
        }

        // call the next middleware or route handler
        next();
    }
}

module.exports = {
    isAuthenticated,
    allowedRoles
}