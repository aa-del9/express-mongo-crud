import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.controller.js";

export const TodoRouter = Router();

TodoRouter.post("/create", createTodo);
TodoRouter.get("/get", getTodos);
TodoRouter.put("/update/:id", updateTodo);
TodoRouter.delete("/delete/:id", deleteTodo);
