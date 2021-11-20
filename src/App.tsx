import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
        <a> Начало работы с React </a>
        <Counter start={10} step={5} />   
      
    </div>
  );
}

export default App;
