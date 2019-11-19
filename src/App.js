import React from 'react';
import Class from './components/Class'
import Function from './components/Function'
import './App.css';

function App() {
  return (
    <div className="App">
      <fieldset>
        <h1>Class components</h1>
        <Class />
      </fieldset>
      <fieldset>
        <h1>Function components</h1>
        <Function />
      </fieldset>
    </div>
  );
}

export default App;