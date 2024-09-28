const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Sample data
const todo = {
  todos: [
    {
      title: "Task 1",
      description: "Task 1",
    },
    {
      title: "Task 2",
      description: "Task 2",
    },
  ],
};

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Route to get todos
app.get("/", (req, res) => {
  res.json(todo); // Sends the todos object as a JSON response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
