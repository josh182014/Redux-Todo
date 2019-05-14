import React from 'react';
import TodoList from './components/TodoList'
import  './components/Todo.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Awesome React Todo App featuring Redux!!!</h1>
      {/* <TodoForm className='form' /> */}
      <TodoList />
    </div>
  );
}

export default App;
