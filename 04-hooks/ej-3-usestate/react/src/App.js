import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  // State
  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" placeholder="What needs to be done?" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>

    </div>
  );
}

export default App;
