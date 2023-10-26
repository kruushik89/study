import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const handleTodoInputChange = (event) => setTodoInput(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      nameTodo: todoInput,
      id: uuid(),
    }
    setTodos([...todos, newTodo]);
    setTodoInput('');
  }

  const removeTodo = (id) => {
    const filter = todos.filter(el => el.id !== id);
    setTodos(filter);
  }

  return (
    <div style={{padding: "100px"}}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={handleTodoInputChange}
        />
        <button>Add todo</button>
      </form>
      <h2>Todos list</h2>
      {todos.length ? (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.nameTodo}
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        ) : null}
    </div>
  );
};

export default Todos;