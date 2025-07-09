import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ marginBottom: '8px' }}>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
