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