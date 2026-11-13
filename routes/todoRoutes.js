const express = require('express');
const { getAllTodos, getTodoByID, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const { isAuthenticated } = require('../middlewares/auth');

const todoRouter = express.Router();

// make sure the user is authenticated before accessing any todo routes
todoRouter.use(isAuthenticated);

// protected routes
todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

module.exports = todoRouter;