import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes/index.js";
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/todo-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes(app);
app.get("/", (req, res) => {
  res.status(200);
  res.send({ message: "Welcome to root URL of Server" });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
