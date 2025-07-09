import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        setTodos(response.data.map(item => ({
          id: item.id,
          text: item.title,
          completed: item.completed
        })));
      })
      .catch(error => console.error('Fetch failed:', error));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
