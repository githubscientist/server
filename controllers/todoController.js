const Todo = require('../models/todo');

const todoController = {
    getAllTodos: async (request, response) => {
        // get the todos from the database
        const todos = await Todo.find();

        response.json(todos);
    }
}

module.exports = todoController;