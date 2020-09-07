import React, { useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';

import formReducer, { initToDos } from './reducers/formReducer';

function App() {
  const [state, dispatch] = useReducer(formReducer, initToDos);

  return (
    <div className="App">
      <form>
        <label>Add To Do</label>
        <input type="text" />
        <button>Submit</button>
      </form>
      <List list={state}/>
    </div>
  );
}

export default App;
