const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Enable CORS

// Correct structure: todo is now an array of task objects
const todos = [
  {
    "id": "1",
    "title": "Task 1",
    "description": "desc 1"
  },
  {
    "id": "2",
    "title": "Task 2",
    "description": "desc 2"
  },
  {
    "id": "3",
    "title": "Task 3",
    "description": "desc 3"
  }
];

// GET /todo route to get task by ID from the query parameter
app.get('/todo', (req, res) => {
  const id = req.query.id; // Get 'id' from query string
  const todo = todos.find(t => t.id === id); // Find todo with matching ID

  if (todo) {
    res.json(todo); // Return the todo if found
  } else {
    res.status(404).json({ message: 'Todo not found' }); // Return 404 if not found
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
