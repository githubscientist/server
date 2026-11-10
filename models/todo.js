// import mongoose
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: {
        type: String
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema, 'todos');