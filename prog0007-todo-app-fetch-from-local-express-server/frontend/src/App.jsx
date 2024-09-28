import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/') // Correct endpoint
      .then(async (res) => {
        const json = await res.json();
        console.log(json.todos); // Log the fetched todos
        setTodos(json.todos); // Accessing the correct key
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <>
      <p>Hello World</p>
      {todos.map((value, index) => (
        <Todo key={index} title={value.title} description={value.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <strong>{title}</strong> <br />
      {description}
    </div>
  );
}

export default App;
