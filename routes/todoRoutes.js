const express = require('express');
const { getAllTodos, getTodoByID } = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoByID);

module.exports = todoRouter;