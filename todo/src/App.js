import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import TodoForm from './components/TodoForm';
import Completed from './components/Completed';

import formReducer, { initToDos } from './reducers/formReducer';

function App() {
  const [state, dispatch] = useReducer(formReducer, initToDos);

  return (
    <div className="App">
      <TodoForm list={state} dispatch={dispatch}/>
      <List list={state} dispatch={dispatch}/>
      <Completed list={state.completed}/>
    </div>
  );
}

export default App;
