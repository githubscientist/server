const Todo = require('../models/todo');

const todoController = {
    getAllTodos: async (request, response) => {
        try {
            // get the todos from the database
            const todos = await Todo.find();

            response.status(200).json(todos);
        } catch (error) {
            response.status(500).json({ 'message': 'Error in fetching todos...' });
        }
    }
}

module.exports = todoController;