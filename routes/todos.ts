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

export default router;
