"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
});
router.put("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        // Send error as a response
        return res.status(404).json({ message: "Could not find the post" });
    }
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    res.status(200).json({ message: "Updated!", updatedTodo: todos[todoIndex] });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        // Send error as a response
        return res.status(404).json({ message: "Could not find the post" });
    }
    todos.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo deleted!" });
});
exports.default = router;
