const express = require('express');
const { getAllTodos } = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter.get('/', getAllTodos);

module.exports = todoRouter;