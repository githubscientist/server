const todoController = {
    getAllTodos: async (request, response) => {
        response.json({ message: 'hello world!' });
    }
}

module.exports = todoController;