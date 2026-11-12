const User = require('../models/user');

const authController = {
    registerUser: async (req, res) => {
        try {
            // get the user details from the request body
            const { name, email, password } = req.body;

            // create a new user object
            const newUser = new User({
                name,
                email,
                password
            });

            // check if a user with the same email already exists
            const existingUser = await User.find({ email });

            if (existingUser.length > 0) {
                // user already exists
                return res.status(500).json({ message: 'User already exists' });
            }

            // save the user to the database
            const savedUser = await newUser.save();

            res.status(201).json({ message: 'Registration successful', user: savedUser });
        } catch (error) {
            res.status(500).json({ message: 'Error in registering user...', error: error.message });
        }
    }
}   

module.exports = authController;