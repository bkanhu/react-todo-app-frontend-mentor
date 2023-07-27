import React, { useState, useEffect } from 'react';

export default function Todo() {
  const [inputValue, setInputValue] = useState('');
  // const [todos, setTodos] = useState([]);
  // instead of using an empty array to initialize the todos, first check if the items is avaliable in localstorage.
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // press enter to add the todo
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue.trim(), checked: false }]);
      setInputValue('');
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleTodoToggle = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleTodoDelete = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((_, i) => i !== index);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <section className="todo-section">
      <input
        type="text"
        className="todo-input"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <div className="todo-container">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleTodoToggle(index)}
                className="checkbox"
              />
              <span
                style={{
                  textDecoration: todo.checked ? 'line-through' : 'none',
                  color: todo.checked ? '#44465b' : '#9799b2',
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleTodoDelete(index)}
                className="delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
