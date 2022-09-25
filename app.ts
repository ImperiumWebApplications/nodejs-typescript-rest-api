import express from "express";
import bodyParser from "body-parser";
import TodoRoutes from "./routes/todos";

const app = express();
app.use(bodyParser.json());

app.use(TodoRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
