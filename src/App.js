<<<<<<< HEAD
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
=======
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Membership from './pages/Membership';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Planet Fitness Manager</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/classes">Classes</Link> | 
          <Link to="/membership">Membership</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 5bbb7a6ae83491af909db39f045ab5fcafa9003a
  );
}

export default App;
