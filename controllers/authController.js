const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, NODE_ENV } = require('../utils/config');

const authController = {
    registerUser: async (req, res) => {
        try {
            // get the user details from the request body
            const { name, email, password } = req.body;

            // encrypt the password
            const encryptedPassword = await bcrypt.hash(password, 10);

            // create a new user object
            const newUser = new User({
                name,
                email,
                password: encryptedPassword
            });

            // check if a user with the same email already exists
            const existingUser = await User.find({ email });

            if (existingUser.length > 0) {
                // user already exists
                return res.status(500).json({ message: 'User already exists' });
            }

            // save the user to the database
            const savedUser = await newUser.save();
            const user = savedUser.toObject();

            delete user.password;
            delete user.__v;

            res.status(201).json({ message: 'Registration successful', user });
        } catch (error) {
            res.status(500).json({ message: 'Error in registering user...', error: error.message });
        }
    },

    loginUser: async (req, res) => {
        try {
            // perform authentication
            // get the email and password from the request body
            const { email, password } = req.body;

            // check if the user exists with this email in the system
            const user = await User.findOne({ email });

            if (!user) {
                // no such user exists if the user is null or false
                // return an error response
                return res.status(500).json({ message: 'user does not exist' });
            }

            // if we reach here, it means user exists
            // check if the password matches
            const doesPasswordMatch = await bcrypt.compare(password, user.password);

            if (!doesPasswordMatch) {
                // if the password does not match
                return res.status(500).json({ message: 'password does not match' });
            }

            // generate a token
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

            // store the token as httpOnly cookie in the response
            res.cookie('token', token, {
                httpOnly: true,
                secure: NODE_ENV === 'production', // set to true in production
                sameSite: 'strict', // adjust based on your needs
                maxAge: 3600000 // 1 hour in milliseconds
            });

            res.status(200).json({ message: 'login successful' });
        } catch (error) {
            res.status(500).json({ message: 'login failed', error: error.message });
        }
    },

    me: async (req, res) => {
        try {
            // get the userid from request object
            const userId = req.userId;

            // get the user details from the database
            const user = await User.findById(userId).select('-password -__v');

            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }

            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user details', error: error.message });
        }
    },

    logoutUser: (req, res) => {
        try {
            // clear the token cookie
            res.clearCookie('token', {
                httpOnly: true,
                secure: NODE_ENV === 'production', // set to true in production
                sameSite: 'strict' // adjust based on your needs
            });

            res.status(200).json({ message: 'logout successful' });
        } catch (error) {
            res.status(500).json({ message: 'Error logging out user', error: error.message });
        }
    }
}   

module.exports = authController;