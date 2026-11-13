const Todo = require('../models/todo');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const todoController = {
    getAllTodos: async (req, res) => {
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

            // get the user details from the database
            const user = await User.findById(userId).select('-password -__v');

            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }

            // get the todos from the database
            const todos = await Todo.find();

            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ 'message': 'Error in fetching todos...' });
        }
    },

    getTodoByID: async (request, response) => {
        try {
            // get the id from the request object
            const { id } = request.params;
            
            // get the todo for the id from the database
            const todo = await Todo.findById(id);

            // return the todo as a response
            response.status(200).json(todo);
        } catch (error) {
            response.status(500).json({ 'message': 'Error in fetching todo by id...' });
        }
    },

    createTodo: async (request, response) => {
        try {
            // console.log(request.body);

            // get the data from the request body
            const { title, description, isDone } = request.body;

            // create a new todo item
            const newTodo = new Todo({
                title,
                description,
                isDone
            });

            // save to the database
            const todo = await newTodo.save();

            // return the todo as a response
            response.status(200).json(todo);
        } catch (error) {
            response.status(500).json({ 'message': 'Error in creating a new todo...' });
        }
    },

    updateTodo: async (request, response) => {
        try {
            // get the id from the request params
            const { id } = request.params;

            // get the data to update from the request body
            const { title, description, isDone } = request.body;

            // update in the database
            const updatedTodo = await Todo.findByIdAndUpdate(id, {
                title,
                description,
                isDone
            }, { new: true });
            // return the todo as a response
            response.status(200).json(updatedTodo);
        } catch (error) {
            response.status(500).json({ 'message': 'Error in updating todo...' });
        }
    },
    deleteTodo: async (request, response) => {
        try {
            // get the id from the request params
            const { id } = request.params;

            // delete todo from the database
            await Todo.findByIdAndDelete(id);

            // return the todo as a response
            response.status(200).json({ 'message': 'Todo deleted...' });
        } catch (error) {
            response.status(500).json({ 'message': 'Error in updating todo...' });
        }
    },
}

module.exports = todoController;