const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

// Use task routes
app.use("/tasks", taskRoutes);

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
