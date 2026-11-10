const express = require('express');
const { getAllTodos, getTodoByID, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

module.exports = todoRouter;