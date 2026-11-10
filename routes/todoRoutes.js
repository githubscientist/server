const express = require('express');
const { getAllTodos, getTodoByID, createTodo } = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/', createTodo);

module.exports = todoRouter;