const express = require('express');
const { getAllTodos, getTodoByID, createTodo, updateTodo } = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);

module.exports = todoRouter;