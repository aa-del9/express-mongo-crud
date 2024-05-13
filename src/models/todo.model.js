import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  text: {
    type: String,
    required: true,
    min: 4,
    max: 100,
  },
});

export const TodoModel = model("Todo", todoSchema);
