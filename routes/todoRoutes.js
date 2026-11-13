const express = require('express');
const { getAllTodos, getTodoByID, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const { isAuthenticated, allowedRoles } = require('../middlewares/auth');

const todoRouter = express.Router();

// make sure the user is authenticated before accessing any todo routes
todoRouter.use(isAuthenticated);

// protected routes
todoRouter.get('/', allowedRoles(['admin', 'user']), getAllTodos);
todoRouter.get('/:id', allowedRoles(['admin', 'user']), getTodoByID);
todoRouter.post('/', allowedRoles(['admin', 'user']), createTodo);
todoRouter.put('/:id', allowedRoles(['admin', 'user']), updateTodo);
todoRouter.delete('/:id', allowedRoles(['admin']), deleteTodo);

module.exports = todoRouter;