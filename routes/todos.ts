import { Router } from "express";
import { Todo } from "../models/Todo";

const router = Router();

const todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
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
    throw new Error("Could not find todo!");
  }
  todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
  res.status(200).json({ message: "Updated!", updatedTodo: todos[todoIndex] });
});

export default router;
