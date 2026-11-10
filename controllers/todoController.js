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
    }
}

module.exports = todoController;