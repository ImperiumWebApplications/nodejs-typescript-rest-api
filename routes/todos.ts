import { Router } from "express";
import { Todo } from "../models/Todo";

const router = Router();

const todos: Todo[] = [];

type RequestBody = {
  text: string;
};

type RequestParams = {
  todoId: string;
};

router.get("/", (req, res, next) => {
  res.status(200).json({ todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
});

router.put("/todo/:todoId", (req, res, next) => {
  const body = req.body as RequestBody;
  const params = req.params as RequestParams;
  const todoId = params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    // Send error as a response
    return res.status(404).json({ message: "Could not find the post" });
  }
  todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
  res.status(200).json({ message: "Updated!", updatedTodo: todos[todoIndex] });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;
  const todoId = params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    // Send error as a response
    return res.status(404).json({ message: "Could not find the post" });
  }
  todos.splice(todoIndex, 1);
  res.status(200).json({ message: "Todo deleted!" });
});

export default router;
