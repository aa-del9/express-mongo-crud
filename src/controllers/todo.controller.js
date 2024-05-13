import { TodoModel } from "../models/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const todo = await TodoModel.create(req.body);
    if (!todo) {
      res.status(400);
      return res.send({ message: "todo not created" });
    }
    res.status(200);
    return res.send({ message: "todo created", todo });
  } catch (error) {
    return res.send({ message: "todo not created" });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    if (!todos) {
      res.status(400);
      return res.send({ message: "todos not found" });
    }
    res.status(200);
    return res.send(todos);
  } catch (error) {
    return res.send({ message: "todos not found" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    console.log(req.params.id);
    const todo = await TodoModel.findByIdAndDelete(req.params.id);

    if (!todo) {
      res.status(400);
      return res.send({ message: "todo not found" });
    }
    res.status(200);
    return res.send({ message: "todo deleted" });
  } catch (error) {
    return res.send({ message: "todo not deleted" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await TodoModel.findByIdAndUpdate(req.params.id, req.body);
    if (!todo) {
      res.status(400);
      return res.send({ message: "todo not found" });
    }
    res.status(200);
    return res.send({ message: "todo updated" });
  } catch (error) {
    return res.send({ message: "todo not updated" });
  }
};
