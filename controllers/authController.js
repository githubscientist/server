const User = require('../models/user');
const bcrypt = require('bcrypt');

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
    }
}   

module.exports = authController;