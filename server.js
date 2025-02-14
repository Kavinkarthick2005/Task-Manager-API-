const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/taskdb", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/tasks", taskRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
