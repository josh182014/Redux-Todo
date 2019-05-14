import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

const dummyData = [
  {
    todo: 'idk',
    id: 65436,
    completed: false
  },
  {
    todo: 'stuff',
    id: 34234,
    completed: false
  }
]

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
